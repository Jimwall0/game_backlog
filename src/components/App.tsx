import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { getAllGames, initDB } from '../database/database';

type Game = {
  id: number;
  title: string;
  studio: string;
  reason?: string;
};

export default function App() {
    const [gamelist, setgamelist] = useState<Game[]>([]);
  useEffect(() => {
    initDB();
    console.log("Database Initialized");
    const games = getAllGames();
    setgamelist(games);
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