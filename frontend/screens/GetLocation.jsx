import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {Feather} from '@expo/vector-icons'
import "../global.css"

export default function GetLocation() {
  
  return (
    <View className="flex bg-black h-full pt-14 px-4 ">
      <View className="h-full flex items-center">
        <Text className="text-4xl font-semibold text-white">Todays Weather is</Text>
        <Feather name="map-pin" size={70} color="blue"/>
        <TouchableOpacity className="p-4 bg-blue-500 rounded-full px-6 mt-3">
          <Text className="text-white">Get Location</Text>
          </TouchableOpacity>

        <Text className="text-5xl pt-2 m-text-white">Rideable</Text>
      </View>
    </View>
  );
}
