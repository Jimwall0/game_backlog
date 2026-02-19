import { useSQLiteContext } from "expo-sqlite";

export function useSQLiteContext() {
  const db = useSQLiteContext();
  function getActivites() {
    return db.getAllSync("SELECT * FROM activities");
  }
}
