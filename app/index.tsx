import { Link } from 'expo-router';
import { Text, View } from "react-native";
import App from "../src/components/App";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text><App/></Text>
      <Link href="./addLog" style={{color: 'blue'}}>Add Game</Link>
    </View>
  );
}
