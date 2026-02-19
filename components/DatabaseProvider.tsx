import { SQLiteProvider } from "expo-sqlite";
import { Suspense } from "react";
import { View } from "react-native";

export function DatabaseProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<View />}>
      <SQLiteProvider databaseName="game_backlog.db">{children}</SQLiteProvider>
    </Suspense>
  );
}
