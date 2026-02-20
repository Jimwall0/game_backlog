import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('app.db');

export const initDB = () => {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS games (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      studio TEXT NOT NULL,
      reason TEXT
    );
  `);
  const count = db.getFirstSync(`SELECT COUNT(*) as count FROM games;`);

  if (count.count === 0) {
    db.runSync(
      `INSERT INTO games (title, studio, reason) VALUES (?, ?, ?);`,
      ['Mincraft', 'Mojang', "Don't own it for some reason"]
    );
  }
};

// 🔹 CREATE
export const insertGame = (title, studio, reason) => {
  return db.runSync(
    `INSERT INTO games (title, studio, reason) VALUES (?, ?, ?);`,
    [title, studio, reason]
  );
};


// 🔹 READ
export const getAllGames = () => {
  return db.getAllSync(`SELECT * FROM games;`);
};

// 🔹 UPDATE
export const updateGame = (id, title, studio, reason) => {
  return db.runSync(
    `UPDATE games SET title = ?, studio = ?, reason = ? WHERE id = ?;`,
    [title, studio, reason, id]
  );
};


// 🔹 DELETE
export const deleteGame = (id) => {
  return db.runSync(
    `DELETE FROM games WHERE id = ?;`,
    [id]
  );
};

export default db;