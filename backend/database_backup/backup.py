import csv
import os
import subprocess
import zipfile
from datetime import datetime

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
    MYSQLDUMP_PATH,
    validate_tls_certificate,
)


def initialize():
    BACKUP_DIR.mkdir(exist_ok=True)
    LOG_DIR.mkdir(exist_ok=True)
    if not LOG_FILE.exists():
        with LOG_FILE.open("w", newline="", encoding="utf-8") as file:
            csv.writer(file).writerow([
                "Backup Date & Time", "Database Name", "Backup Status",
                "Recovery Status", "Error Message",
            ])


def write_log(db_name, backup_status, recovery_status, error_message):
    with LOG_FILE.open("a", newline="", encoding="utf-8") as file:
        csv.writer(file).writerow([
            datetime.now().strftime("%Y-%m-%d %H:%M:%S"), db_name,
            backup_status, recovery_status, error_message,
        ])


def compress_backup(sql_file):
    zip_file = sql_file.with_suffix(".zip")
    with zipfile.ZipFile(zip_file, "w", zipfile.ZIP_DEFLATED) as zip_file_handle:
        zip_file_handle.write(sql_file, sql_file.name)
    sql_file.unlink()
    return zip_file


def keep_last_two_backups(db_name):
    backups = sorted(BACKUP_DIR.glob(f"{db_name}_*.zip"), reverse=True)
    for old_backup in backups[2:]:
        old_backup.unlink()
        print(f"Deleted old backup: {old_backup.name}")


def backup_database(db_name):
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    sql_file = BACKUP_DIR / f"{db_name}_{timestamp}.sql"
    command = [
        MYSQLDUMP_PATH,
        f"--host={DB_HOST}",
        f"--port={DB_PORT}",
        f"--user={DB_USER}",
        "--single-transaction",
        "--ssl-mode=VERIFY_CA",
        f"--ssl-ca={CA_CERT_PATH}",
        f"--result-file={sql_file}",
        db_name,
    ]
    env = os.environ.copy()
    env["MYSQL_PWD"] = DB_PASSWORD
    result = subprocess.run(command, env=env, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    if result.returncode == 0:
        zip_file = compress_backup(sql_file)
        keep_last_two_backups(db_name)
        print(f"Backup successful: {zip_file}")
        write_log(db_name, "Success", "N/A", "")
    else:
        error = result.stderr.decode(errors="replace")
        print(error)
        write_log(db_name, "Failed", "N/A", error)


if __name__ == "__main__":
    try:
        validate_tls_certificate()
        initialize()
        backup_database(DB_NAME)
        print("Backup completed.")
    except (RuntimeError, OSError) as error:
        print(f"Backup configuration error: {error}")
