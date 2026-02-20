import { useEffect } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { getAll, initDB } from "../database/database";

export type Game = {
  id: number;
  title: string;
  studio: string;
  reason?: string;
};

export default function App() {
  useEffect(() => {
    const load = async () => {
      try {
        await initDB();
        const data: Game[] = await getAll();
        setgamelist(data);
      } catch (error) {
        console.log(error);
      }
    };
    load();
  }, []);

  return (
    <SafeAreaView>
      <Text>My Games</Text>
      <FlatList
        data={gamelist}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.studio}</Text>
            <Text>{item.reason}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
