import { Link } from "expo-router";
import { useState,useEffect } from "react";
import { Text, View } from "react-native";
import App from "../src/components/App";
import {getAll} from '../src/database/database';

export type Game = {
  id: number;
  title: string;
  studio: string;
  reason?: string;
}

export default function Index() {
  const { page, setpage } = useState([]);

  const reload = () => {
    const data: Game[] = await getAll();
    setpage(data);
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        <App page=page/>
      </Text>
      <Link href="./addLog" style={{ color: "blue" }}>
        Add Game
      </Link>
    </View>
  );
}
