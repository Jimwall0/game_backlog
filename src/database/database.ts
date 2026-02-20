import * as SQLite from 'expo-sqlite';

type Game = {
  id: number;
  title: string;
  studio: string;
  reason?: string;
}

const db: SQLite.SQLiteDatabase = await SQLite.openDatabaseAsync('app.db');

await db.execAsync(`
  CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    studio TEXT NOT NULL,
    reason TEXT
  );
`);

export default db;