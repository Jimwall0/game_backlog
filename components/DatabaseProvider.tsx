import { SQLiteProvider } from "expo-sqlite";
import * as React from "react";
import { Suspense } from "react";
import { View } from "react-native";
import InitDB from "./table";

export function DatabaseProvider({ children }: { children?: React.ReactNode }) {
  return (
    <Suspense fallback={<View />}>
      <InitDB />
      <SQLiteProvider databaseName="game_backlog.db">{children}</SQLiteProvider>
    </Suspense>
  );
}
