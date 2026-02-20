import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getAllGames, initDB } from './src/database/database';

export default function App() {
    const [gamelist, setgamelist] = useState([]);
  useEffect(() => {
    initDB();
    console.log("Database Initialized");
    const games = getAllGames();
    console.log(games); 
  }, []);

  return (
    <View>
        <Text>
            Loading...
        </Text>
    </View>
  );
}