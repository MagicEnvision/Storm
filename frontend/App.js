import { View, Text } from "react-native";
import "./global.css"

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-blue-500 bg-white">Universal React with Expo</Text>
    </View>
  );
}
