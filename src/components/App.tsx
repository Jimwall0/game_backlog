import { SQLiteProvider } from "expo-sqlite";
import { StyleSheet, View } from "react-native";

export type Game = {
  id: number;
  title: string;
  studio: string;
  reason?: string;
};

export default function App() {
  const initializDB = async (db) => {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS items (
      id Integer Primary Key NOT NULL,
      name TEXT NOT NULL,
      studio TEXT NOT NULL,
      reason TEXT
      );
      `);
  };
  return (
    <View style={StyleSheet.container}>
      <SQLiteProvider database="db.db" onINit={initialDB}>
        <display />
        <Content />
      </SQLiteProvider>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#00fcf4",
  },
  listITem: {
    fontSize: 18,
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    marginVertical: 10,
  },
  buttonRed: {
    backgroundColor: "#e74c3c",
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
