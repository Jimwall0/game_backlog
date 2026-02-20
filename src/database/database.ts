import * as SQLite from 'expo-sqlite';

type Game = {
  id: number;
  title: string;
  studio: string;
  reason?: string;
}

const db: SQLite.SQLiteDatabase = SQLite.openDatabaseSync('app.db');

export const initDB = (): void => {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS games (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      studio TEXT NOT NULL,
      reason TEXT
    );
  `);

  const count = db.getFirstSync<{ count: number}>(`SELECT COUNT(*) as count FROM games;`);

  if (count?.count === 0) {
    db.runSync(
      `INSERT INTO games (title, studio, reason) VALUES (?, ?, ?);`,
      ['Mincraft', 'Mojang', "Don't own it for some reason"]
    );
  }
};

// 🔹 CREATE
export const insertGame = (title: string, studio: string, reason?: string): void => {
  db.runSync(
    `INSERT INTO games (title, studio, reason) VALUES (?, ?, ?);`,
    [title, studio, reason ?? null]
  );
};


// 🔹 READ
export const getAllGames = (): Game[] => {
  return db.getAllSync(`SELECT * FROM games;`);
};

// 🔹 UPDATE
export const updateGame = (id: number, title: string, studio: string, reason?:string): void => {
  db.runSync(
    `UPDATE games SET title = ?, studio = ?, reason = ? WHERE id = ?;`,
    [title, studio, reason ?? null, id]
  );
};


// 🔹 DELETE
export const deleteGame = (id: number) => {
  return db.runSync(
    `DELETE FROM games WHERE id = ?;`,
    [id]
  );
};

export default db;