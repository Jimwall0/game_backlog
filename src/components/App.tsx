import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SQLiteDatabase, SQLiteProvider } from "expo-sqlite";
import React from "react";
import AddItemScreen from "./AddItemScreen";
import HomeScreen from "./HomeScreen";

// Type for your game item
export type Game = {
  id: number;
  name: string;
  studio: string;
  reason?: string;
};

// Type for the init callback
type InitDBFunction = (db: SQLiteDatabase) => Promise<void>;

const Stack = createNativeStackNavigator();

export default function App() {
  const initializeDB: InitDBFunction = async (db) => {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        studio TEXT NOT NULL,
        reason TEXT
      );
    `);
  };

  return (
    <SQLiteProvider databaseName="app.db" onInit={initializeDB}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddItem" component={AddItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SQLiteProvider>
  );
}
