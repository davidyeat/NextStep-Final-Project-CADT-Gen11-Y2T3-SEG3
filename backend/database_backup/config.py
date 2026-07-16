"""Shared Aiven MySQL configuration for database backup and recovery."""

import os
from pathlib import Path

from dotenv import load_dotenv

BACKUP_ROOT = Path(__file__).resolve().parent
BACKEND_ROOT = BACKUP_ROOT.parent

# Use the same private environment file as the Node backend.
load_dotenv(BACKEND_ROOT / ".env")


def required_env(name):
    value = os.getenv(name)
    if not value:
        raise RuntimeError(f"Missing required environment variable: {name}")
    return value


DB_HOST = required_env("DB_HOST")
DB_PORT = int(required_env("DB_PORT"))
DB_USER = required_env("DB_USER")
DB_PASSWORD = required_env("DB_PASSWORD")
DB_NAME = required_env("DB_NAME")

BACKUP_DIR = BACKUP_ROOT / "backups"
LOG_DIR = BACKUP_ROOT / "logs"
LOG_FILE = LOG_DIR / "database_logs.csv"
CA_CERT_PATH = Path(os.getenv("AIVEN_CA_CERT_PATH", BACKUP_ROOT / "certs" / "ca.pem"))

# Set these in the environment when the MySQL binaries are not on PATH.
MYSQLDUMP_PATH = os.getenv("MYSQLDUMP_PATH", "mysqldump")
MYSQL_PATH = os.getenv("MYSQL_PATH", "mysql")


def validate_tls_certificate():
    if not CA_CERT_PATH.is_file():
        raise RuntimeError(
            f"Aiven CA certificate was not found at {CA_CERT_PATH}. "
            "Download the CA certificate from the Aiven console, save it there, "
            "or set AIVEN_CA_CERT_PATH."
        )
