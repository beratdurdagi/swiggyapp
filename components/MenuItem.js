import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MenuItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("Menu", {
            id: item.id,
            name: item.name,
            image: item.image,
            rating: item.rating,
            time: item.time,
            adress: item.adress,
            cost_for_two: item.cost_for_two,
            menu:item.menu,
            cuisines:item.cuisines,
          })
        }
        style={{ flexDirection: "row" }}
      >
        <View style={{ margin: 10 }}>
          <ImageBackground
            source={{ uri: item.image }}
            style={{ aspectRatio: 4 / 5, height: 150 }}
            imageStyle={{ borderRadius: 8 }}
          >
            <AntDesign
              style={{ position: "absolute", top: 10, right: 10 }}
              name="hearto"
              size={24}
              color="white"
            />
          </ImageBackground>
        </View>

        <View style={{ marginLeft: 15 }}>
          <View>
            <Text>{item.name}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons name="stars" size={20} color={"green"} />
            <Text
              style={{
                fontSize: 15,
                color: "black",
                marginLeft: 3,
                fontWeight: "400",
              }}
            >
              {item.rating}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "black",
                marginLeft: 3,
                fontWeight: "400",
              }}
            >
              .
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "black",
                marginLeft: 3,
                fontWeight: "400",
              }}
            >
              {item.time}
            </Text>
          </View>
          <Text style={{ fontSize: 17, color: "gray" }}>{item.adress}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
