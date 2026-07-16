import csv
import os
import shutil
import subprocess
import tempfile
import zipfile
from datetime import datetime
from pathlib import Path

from config import (
    BACKUP_DIR,
    CA_CERT_PATH,
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_PORT,
    DB_USER,
    LOG_DIR,
    LOG_FILE,
    MYSQL_PATH,
    validate_tls_certificate,
)


def initialize():
    LOG_DIR.mkdir(exist_ok=True)
    if not LOG_FILE.exists():
        with LOG_FILE.open("w", newline="", encoding="utf-8") as file:
            csv.writer(file).writerow([
                "Backup Date & Time", "Database Name", "Backup Status",
                "Recovery Status", "Error Message",
            ])


def write_log(db_name, recovery_status, error_message):
    with LOG_FILE.open("a", newline="", encoding="utf-8") as file:
        csv.writer(file).writerow([
            datetime.now().strftime("%Y-%m-%d %H:%M:%S"), db_name,
            "N/A", recovery_status, error_message,
        ])


def latest_backup(db_name):
    backups = sorted(BACKUP_DIR.glob(f"{db_name}_*.zip"), reverse=True)
    return backups[0] if backups else None


def restore_database(db_name):
    zip_file = latest_backup(db_name)
    if zip_file is None:
        message = f"No backup found for {db_name}."
        write_log(db_name, "Failed", message)
        print(message)
        return

    temp_folder = tempfile.mkdtemp(prefix="nextstep_restore_")
    try:
        with zipfile.ZipFile(zip_file, "r") as archive:
            archive.extractall(temp_folder)
        sql_files = list(Path(temp_folder).glob("*.sql"))
        if len(sql_files) != 1:
            raise RuntimeError("The backup archive must contain exactly one SQL file.")

        command = [
            MYSQL_PATH,
            f"--host={DB_HOST}",
            f"--port={DB_PORT}",
            f"--user={DB_USER}",
            "--ssl-mode=VERIFY_CA",
            f"--ssl-ca={CA_CERT_PATH}",
            db_name,
        ]
        env = os.environ.copy()
        env["MYSQL_PWD"] = DB_PASSWORD
        with sql_files[0].open("r", encoding="utf-8") as infile:
            result = subprocess.run(command, stdin=infile, env=env, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

        if result.returncode == 0:
            print(f"{db_name} restored successfully")
            write_log(db_name, "Success", "")
        else:
            write_log(db_name, "Failed", result.stderr.decode(errors="replace"))
    except (OSError, RuntimeError, zipfile.BadZipFile) as error:
        write_log(db_name, "Failed", str(error))
        print(f"Recovery failed: {error}")
    finally:
        shutil.rmtree(temp_folder, ignore_errors=True)


if __name__ == "__main__":
    try:
        validate_tls_certificate()
        initialize()
        restore_database(DB_NAME)
        print("Recovery completed.")
    except (RuntimeError, OSError) as error:
        print(f"Recovery configuration error: {error}")
