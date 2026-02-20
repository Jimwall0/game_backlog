import React, { useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";
import { createGame } from "../src/database/database";

type GameRow = {
  id: number;
  title: string;
  studio: string;
  reason: string | null;
};

export default function AddLog() {
  const [title, setTitle] = useState("");
  const [studio, setStudio] = useState("");
  const [reason, setReason] = useState("");
  const [logs, setLogs] = useState<GameRow[]>([]);

  const handleAddGame = async () => {
    if (!title || !studio) return;

    const result = await createGame({ title, studio, reason });

    if (result?.lastInsertRowId) {
      setLogs(prev => [
        ...prev,
        {
          id: result.lastInsertRowId,
          title,
          studio,
          reason: reason || null
        }
      ]);

      setTitle("");
      setStudio("");
      setReason("");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        Create Game Log
      </Text>

      <TextInput
        placeholder="Enter Title"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <TextInput
        placeholder="Enter Studio"
        value={studio}
        onChangeText={setStudio}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <TextInput
        placeholder="Enter Reason (optional)"
        value={reason}
        onChangeText={setReason}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Button title="Add Game" onPress={handleAddGame} />

      <FlatList
        data={logs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ padding: 5 }}>
            {item.title} - {item.studio}
          </Text>
        )}
      />
    </View>
  );
}