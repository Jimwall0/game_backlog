import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import App, { Game } from "../src/components/App";
import { getAll, initDB } from "../src/database/database";

export default function Index() {
  const { list, setlist } = useState<Game[]>([]);

  const reload = async () => {
    const data: Game[] = await getAll();
    setlist(data);
  };

  useEffect(() => {
    try {
      initDB();
      reload(setpage);
    } catch (error) {
      console.log("Initialize Failed", error);
    }
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        <App />
      </Text>
      <Link href="./addLog" style={{ color: "blue" }}>
        Add Game
      </Link>
    </View>
  );
}
