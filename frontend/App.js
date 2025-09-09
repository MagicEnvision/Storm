import { View, Text, StyleSheet } from "react-native";
import "./global.css"

export default function App() {
  
  return (
    <View className="flex bg-black h-full pt-14 px-4 ">
      <View className="h-full">
        <Text className="text-4xl font-semibold text-white">Todays Weather is</Text>
        <Text className="text-5xl pt-2 text-white">Rideable</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white"

    }
  })
