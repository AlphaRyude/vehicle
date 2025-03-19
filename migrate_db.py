import sqlite3
import os

# Path to the database file
db_path = 'prime_wheels.db'

# Check if the database file exists
if not os.path.exists(db_path):
    print(f"Database file {db_path} not found.")
    exit(1)

# Connect to the database
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Check if the columns exist
cursor.execute("PRAGMA table_info(user)")
columns = cursor.fetchall()
column_names = [column[1] for column in columns]

# Add the security_question column if it doesn't exist
if 'security_question' not in column_names:
    print("Adding security_question column to user table...")
    cursor.execute("ALTER TABLE user ADD COLUMN security_question VARCHAR(200)")
    print("security_question column added successfully.")
else:
    print("security_question column already exists.")

# Add the security_answer_hash column if it doesn't exist
if 'security_answer_hash' not in column_names:
    print("Adding security_answer_hash column to user table...")
    cursor.execute("ALTER TABLE user ADD COLUMN security_answer_hash VARCHAR(128)")
    print("security_answer_hash column added successfully.")
else:
    print("security_answer_hash column already exists.")

# Commit the changes and close the connection
conn.commit()
conn.close()

print("Database migration completed successfully.") 