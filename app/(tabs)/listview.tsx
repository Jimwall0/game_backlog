import React from "react";
import { Text, View } from "react-native";
function listview() {
    return (
        <View>
            <SQLiteProvider>
            <Text>
                This is where the list of games go
            </Text>
            </SQLiteProvider>
        </View>
    )
}