import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import Carousel from "../components/Carousel.js";
import FoodTypes from "./../components/FoodTypes";
import QuickFood from "../components/QuickFood.js";
import hotels from "../data/hotels.js";
import MenuItem from "../components/MenuItem.js";
import MenuScreen from "./MenuScreen.js";

const HomeScreen = () => {
  const data = hotels;
  return (
    <ScrollView style={{ marginTop: 50 ,}}>
      <View style={styles.container}>
        <TextInput
          placeholder="Search for Restaurant item or more"
          style={{ fontSize: 15 }}
        />
        <EvilIcons name="search" size={24} color="#E52B50" />
      </View>
      {/* image slider*/}
      <Carousel />

      {/*Food Categories*/}
      <View style={{ marginTop: 10, marginHorizontal: 10 }}>
        <Text style={{ fontSize: 17, color: "black", fontWeight: "bold" }}>
          What is on your mind?
        </Text>
      </View>
      <FoodTypes />

      {/* Quickly*/}
      <QuickFood />

      {/*Filter Button*/}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            justifyContent: "center",
            borderWidth: 1,
            borderRadius: 20,
            padding: 10,
            borderColor: "#D0D0D0",
          }}
        >
          <Text style={{ marginRight: 6, fontSize: 15 }}>filter</Text>
          <Ionicons name="filter-sharp" size={24} color="black" />
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            justifyContent: "center",
            borderWidth: 1,
            borderRadius: 20,
            padding: 10,
            borderColor: "#D0D0D0",
            width: 120,
          }}
        >
          <Text> Sort by rating</Text>
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            justifyContent: "center",
            borderWidth: 1,
            borderRadius: 20,
            padding: 10,
            borderColor: "#D0D0D0",
          }}
        >
          <Text>Sort by price</Text>
        </Pressable>
      </View>

      {data.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 7,
    margin: 10,
    padding: 10,
    borderColor: "#C0C0C0",
    
  },
});
export default HomeScreen;