import { useNavigation } from "@react-navigation/native";
import { useSQLiteContext } from "expo-sqlite";
import React, { useState } from "react";
import { Alert, Button, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function AddItemScreen() {
  const db = useSQLiteContext();
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [studio, setStudio] = useState("");
  const [reason, setReason] = useState("");

  const handleAdd = async () => {
    if (!name.trim() || !studio.trim()) {
      Alert.alert("Name and Studio are required");
      return;
    }

    // Insert the new row
    await db.execAsync(
      "INSERT INTO items (name, studio, reason) VALUES (?, ?, ?);",
      [name, studio, reason || null],
    );

    // Go back to HomeScreen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Studio"
        value={studio}
        onChangeText={setStudio}
        style={styles.input}
      />
      <TextInput
        placeholder="Reason (optional)"
        value={reason}
        onChangeText={setReason}
        style={styles.input}
      />
      <Button title="Add Item" onPress={handleAdd} />
    </View>
  );
}
