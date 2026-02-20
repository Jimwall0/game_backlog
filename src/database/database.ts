import * as SQLite from 'expo-sqlite';

type Game = {
  id: number;
  title: string;
  studio: string;
  reason?: string;
}

let db: SQLite.SQLiteDatabase | null = null;

export const initDB = async () => {
  try {
  db = await SQLite.openDatabaseAsync('app')
  await db.execAsync(`
  CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    studio TEXT NOT NULL,
    reason TEXT
  );
  INSERT OR IGNORE INTO games  (id, title, studio, reason) VALUES (1, 'Mincraft', 'Mojang', 'Do not have it');
`);
console.log('database initialized');
} catch (error) {
  console.log("Issue with intializing Database", error);
  return error;
}
};

export const getAll = async () => {
  try {
    return await db.getAllAsync(`SELECT * FROM games`);
  } catch (error) {
    console.log("Error in retrieving Database", error);
    return [];
  }
}
