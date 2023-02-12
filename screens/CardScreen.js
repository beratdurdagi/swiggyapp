import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  cleanCart
} from "../Redux/CartReducer";

const CardScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);
  const instructions = [
    {
      id: "0",
      name: "Avoid Ringing",
      iconName: "bell",
    },
    {
      id: "1",
      name: "Leave at the door",
      iconName: "door-open",
    },
    {
      id: "2",
      name: "directions to reach",
      iconName: "directions",
    },
    {
      id: "3",
      name: "Avoid Calling",
      iconName: "phone-alt",
    },
  ];
  return (
    <>
      <ScrollView style={{ marginTop: 50 }}>
        <View style={styles.header}>
          <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-back"
            size={24}
            color="black"
          />

          <Text style={styles.headerText}>{route.params.name}</Text>
        </View>

        {/* ADD Details*/}
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsContainerText}>
            Ordering for Someone else?
          </Text>
          <Pressable onPress={() => console.warn("dsaadssda")}>
            <Text style={{ ...styles.detailsContainerText, color: "red" }}>
              Add Details
            </Text>
          </Pressable>
        </View>

        <View style={styles.cartContainer}>
          {cart.map((item, index) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 10,
              }}
              key={index}
            >
              <Text style={{ width: 100, fontSize: 16, fontWeight: "600" }}>
                {item.name}
              </Text>

              <Pressable
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  alignItems: "center",
                  borderColor: "#BEBEBE",
                  borderWidth: 0.5,
                  borderRadius: 10,
                }}
              >
                <Pressable
                  onPress={() => {
                    dispatch(decrementQuantity(item));
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "green",
                      paddingHorizontal: 6,
                      fontWeight: "600",
                    }}
                  >
                    -
                  </Text>
                </Pressable>

                <Pressable>
                  <Text
                    style={{
                      fontSize: 19,
                      color: "green",
                      paddingHorizontal: 8,
                      fontWeight: "600",
                    }}
                  >
                    {item.quantity}
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => {
                    dispatch(incrementQuantity(item));
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "green",
                      paddingHorizontal: 6,
                      fontWeight: "600",
                    }}
                  >
                    +
                  </Text>
                </Pressable>
              </Pressable>

              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {item.price * item.quantity}TL
              </Text>
            </View>
          ))}
        </View>
        <Text style={styles.headersText}>Delivery Instructions</Text>

        {/*Icons*/}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {instructions.map((item, i) => (
            <Pressable style={styles.buttonContainer}>
              <FontAwesome5 name={item.iconName} size={24} />
              <Text style={styles.buttonText}>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <Text style={styles.headersText}>Billing Details</Text>

        <View style={styles.totalDetails}>
          <View style={styles.totalDetailsTextView}>
            <Text style={styles.texts}>Item Total</Text>
            <Text style={{ color: "#131120", fontWeight: "bold" }}>
              {total} TL
            </Text>
          </View>
          <View style={styles.totalDetailsTextView}>
            <Text style={styles.texts}>Delivery Fee | 1.2 Kms</Text>
            <Text style={styles.textRed}>FREE</Text>
          </View>
          <View style={styles.totalDetailsTextView}>
            <Text style={styles.texts}>Free Delivery on your Order!</Text>
          </View>
          <Text style={styles.line} />

          <View style={styles.totalDetailsTextView}>
            <Text style={styles.texts}>Delivery Tip</Text>
            <Text style={styles.textRed}>Add Tip</Text>
          </View>
          <View style={styles.totalDetailsTextView}>
            <Text style={styles.texts}>Taxes and Charges</Text>
            <Text style={styles.textRed}>65.3</Text>
          </View>

          <Text style={styles.line} />

          <View style={styles.totalDetailsTextView}>
            <Text style={styles.textBlack}>To Pay</Text>
            <Text style={styles.textBlack}>{total + 65.3} TL</Text>
          </View>
        </View>
      </ScrollView>
      {total === 0 ? null : (
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "white",
            marginBottom: 20,
            padding: 20,
          }}
        >
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              ₹{total + 95}
            </Text>
            <Text style={{ color: "#00A877", fontSize: 17 }}>
              View Detailed Bill
            </Text>
          </View>

          <Pressable
            onPress={() => {
              navigation.navigate("Loading");
              dispatch(cleanCart());
            }}
            style={{
              backgroundColor: "#00A877",
              padding: 14,
              width: 200,
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Proceed To pay
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  headerText: {
    fontSize: 17,
    alignItems: "center",
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 3,
  },
  detailsContainer: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 8,
    height: 50,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
  },
  detailsContainerText: {
    fontSize: 15,
    fontWeight: "500",
  },
  cartContainer: {
    margin: 15,
    width: "90%",
    marginLeft: 15,
    marginRight: 10,
    borderRadius: 8,

    backgroundColor: "white",
  },
  buttonContainer: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    width: 75,
    fontSize: 13,
    color: "#383838",
    paddingTop: 10,
  },
  headersText: { marginLeft: 10, fontSize: 16, fontWeight: "500" },
  totalDetails: {
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
  },
  totalDetailsTextView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
  },
  line: {
    marginTop: 5,
    borderWidth: 0.8,
    color: "gray",
    marginHorizontal: 2,
    height: 1,
    borderRadius: 2,
  },

  textRed: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
  textBlack: {
    color: "#020024",
    fontSize: 16,
    fontWeight: "bold",
  },
  texts: { fontSize: 18, fontWeight: "400", color: "gray" },
});
