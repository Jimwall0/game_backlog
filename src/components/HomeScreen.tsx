import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useSQLiteContext } from "expo-sqlite";
import React, { useCallback, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { Game } from "./App";
import { styles } from "./styles";

export default function HomeScreen() {
  const db = useSQLiteContext();
  const navigation = useNavigation();
  const [items, setItems] = useState<Game[]>([]);

  const loadItems = async () => {
    try {
      const results = await db.getAllAsync("SELECT * FROM items");
      setItems(results as Game[]);
    } catch (e) {
      console.error("Failed to load items:", e);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadItems();
    }, []),
  );

  const deleteDB = async () => {
    await db.execAsync("DROP TABLE IF EXISTS items;");
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        studio TEXT NOT NULL,
        reason TEXT
      );
    `);
    loadItems();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>
            {item.name} ({item.studio}) {item.reason ? `- ${item.reason}` : ""}
          </Text>
        )}
      />
      <Button
        title="Add Item"
        onPress={() => navigation.navigate("AddItem" as never)}
      />
      <View style={{ marginTop: 10 }}>
        <Button title="Delete Database" color="red" onPress={deleteDB} />
      </View>
    </View>
  );
}
