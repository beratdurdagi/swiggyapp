import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import MenuComponent from "./MenuComponent";

const FoodItem = ({ item }) => {
  const data = [item];
  const [selected, setselected] = useState(["Recommended"]);
  const handeItemSelect = (item) => {
    const itemSelected = selected.find((c) => c === item);
    console.log(itemSelected);
    if (itemSelected) {
      setselected(selected.filter((sel) => sel !== item));
    } else {
      setselected([...selected, item]);
    }
  };
  return (
    <View>
      {data.map((item, i) => (
        <>
          <Pressable
            style={styles.mapping}
            key={i}
            onPress={() => handeItemSelect(item.name)}
          >
            <Text style={styles.title}>{item.name}({item.items.length})</Text>
            <AntDesign name={"down"} size={24} />
          </Pressable>

          {selected.includes(item.name)
            ? item.items.map((food, i) => (
                <MenuComponent food={food} key={i} />
              ))
            : null}
        </>
      ))}
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  mapping: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
