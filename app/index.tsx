import { DatabaseProvider } from "@/components/DatabaseProvider";
import InitDB from "@/components/table";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DatabaseProvider>
        <InitDB />
        <Pressable
          style={styles.button}
          onPress={() => {
            router.push("./addLog");
          }}
        >
          <Text style={styles.buttonText}>Create Game Log</Text>
        </Pressable>
      </DatabaseProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
  },
  button: {
    backgroundColor: "#437bb3",
    padding: 16,
    width: "100%",
    textAlign: "center",
  },
  buttonText: {
    color: "white",
  },
});
