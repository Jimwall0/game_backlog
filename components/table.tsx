import { useSQLiteContext } from "expo-sqlite";
import { useEffect } from "react";

export default function InitDB() {
  const db = useSQLiteContext();

  useEffect(() => {
    db.execAsync(`
      CREATE TABLE IF NOT EXISTS games (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        completed INTEGER DEFAULT 0
      );
    `);
  }, []);

  return null;
}

await db.runAsync("INSERT INTO games (title, completed) VALUES (?, ?)", [
  "Zelda",
  0,
]);
