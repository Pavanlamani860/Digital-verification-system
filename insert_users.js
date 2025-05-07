const bcrypt = require('bcrypt');
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Gagan@07',   // ← Change to your MySQL password
  database: 'authenticdb'      // ← Change to your DB name
});

const users = [
  { email: 'user1@example.com', password: 'password123' },
  { email: 'user2@example.com', password: 'hello123' },
  { email: 'user3@example.com', password: 'testpass456' }
];

async function insertUsers() {
  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    db.query(
      'INSERT INTO users (email, password) VALUES (?, ?)',
      [user.email, hashedPassword],
      (err) => {
        if (err) {
          if (err.code === 'ER_DUP_ENTRY') {
            console.log(`User already exists: ${user.email}`);
          } else {
            throw err;
          }
          return;
        }
        console.log(`Inserted: ${user.email}`);
      }
    );
  }
}

insertUsers();
