import * as SQLite from "expo-sqlite";

type NewGame = {
  title: string;
  studio: string;
  reason?: string;
};

type Game = {
  id: number;
  title: string;
  studio: string;
  reason?: string;
};

let db: SQLite.SQLiteDatabase;

export const initDB = async () => {
  try {
    db = await SQLite.openDatabaseAsync("database");
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS games (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        studio TEXT NOT NULL,
        reason TEXT
        );
  `);
    console.log("database initialized");
  } catch (error) {
    console.log("Issue with intializing Database", error);
    return error;
  }
};

export const getAll = async () => {
  try {
    const result = await db.getAllAsync(`SELECT * FROM games`);
    return result as Game[];
  } catch (error) {
    console.log("Error in retrieving Database", error);
    return [];
  }
};

export const createGame = async ({ title, studio, reason }: NewGame) => {
  try {
    return await db.runAsync(
      `INSERT OR IGNORE INTO games (title, studio, reason) VALUES (?, ?, ?);`,
      [title, studio, reason ?? null],
    );
  } catch (error) {
    console.log("Error in adding game", error);
    return null;
  }
};

export const refresh = async () => {
  useEffect(() => {});
};
