import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GetLocation from "./screens/GetLocation";


export default function App() {
  
  return (
    <View>
      <GetLocation />
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
