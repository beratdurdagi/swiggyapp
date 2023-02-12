import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import { useDispatch } from "react-redux";
import { addToCart,removeFromCart,incrementQuantity,decrementQuantity} from "../Redux/CartReducer";

const MenuComponent = ({ food }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);
  const [additems, setAddItems] = useState(0);
  return (
    <View>
      <Pressable
        style={{
          margin: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>{food.name}</Text>
          <Text>{food.price}</Text>
          <Text
            style={{
              marginTop: 5,
              borderRadius: 4,
            }}
          >
            {[0, 0, 0, 0, 0].map((en, i) => (
              <FontAwesome
                // key={`${food.id}-${i}`}
                style={{ paddingHorizontal: 3 }}
                name={i < Math.floor(food.rating) ? "star" : "star-o"}
                size={15}
                color="#FFD700"
              />
            ))}
          </Text>
          <Text
            style={{ width: 180, marginTop: 8, color: "gray", fontSize: 16 }}
          >
            {food.description.length > 30
              ? food.description.substr(0, 35) + "..."
              : food.description}
          </Text>
        </View>

        <Pressable style={{ marginRight: 10 }}>
          <Image
            style={{ width: 120, height: 120, borderRadius: 8 }}
            source={{ uri: food.image }}
          />
          {selected ? (
            <Pressable
              style={{
                position: "absolute",
                top: 90,
                left: 15,

                flexDirection: "row",
                paddingHorizontal: 10,
                paddingVertical: 5,
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 5,
              }}
            >
              <Pressable
                onPress={() => {
                  if (additems === 1) {
                    dispatch(removeFromCart(food));
                    setSelected(false);
                    setAddItems(0);
                  } else {
                    setAddItems((c) => c - 1);
                    dispatch(decrementQuantity(food));
                  }
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    color: "green",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    fontSize: 20,
                    color: "green",
                    paddingHorizontal: 6,
                  }}
                >
                  {additems}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setAddItems((c) => c + 1);
                  dispatch(incrementQuantity(food));
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "green",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setSelected(true);
                if (additems == 0) {
                  setAddItems((c) => c + 1);
                }
                dispatch(addToCart(food));
              }}
              style={{
                position: "absolute",
                top: 90,
                left: 20,

                flexDirection: "row",
                paddingHorizontal: 25,
                paddingVertical: 10,
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  color: "#018749",
                }}
              >
                ADD
              </Text>
            </Pressable>
          )}
        </Pressable>
      </Pressable>
    </View>
  );
};

export default MenuComponent;

const styles = StyleSheet.create({
  startext: {
    marginTop: 5,
    borderRadius: 4,
  },
  pressable: {
    margin: 10,
    justifyContent: "space-between",

    flexDirection: "row",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  description: {
    width: 180,
    fontSize: 17,
    marginTop: 8,
    color: "gray",
  },
  pressable2: {
    marginRight: 10,
  },
  addButton: {
    position: "absolute",
    top: 90,
    left: 20,
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
  },
  addText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#018749",
  },
});
