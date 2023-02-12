import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import FoodItem from "./../components/FoodItem";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";
const MenuScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  console.log(total);
  const route = useRoute();

  const navigation = useNavigation();
  const [menu, setmenu] = useState([]);
  const [modalVisible, setmodalVisible] = useState(false);

  useEffect(() => {
    const fetchMenu = () => {
      setmenu(route.params.menu);
    };
    fetchMenu();
  }, []);

  const toggleModal = () => {
    setmodalVisible(!modalVisible);
  };
  return (
    <>
      <ScrollView style={{ marginTop: 50 }}>
        <View style={styles.header}>
          <View style={styles.ıconHeader}>
            <Ionicons
              onPress={() => navigation.goBack()}
              name="arrow-back"
              size={24}
              color="black"
            />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="search" size={24} color="black" />
              <Text style={{ marginLeft: 3, fontWeight: "400" }}>Search</Text>
            </View>
          </View>
          <View style={styles.whiteContainer}>
            <Text style={{ margin: 10, fontSize: 20 }}>
              {route.params.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 10,
                alignItems: "center",
              }}
            >
              <MaterialIcons name="stars" size={24} color={"green"} />
              <Text style={styles.subTitle}>{route.params.rating}</Text>
              <Text style={styles.subTitle}>.</Text>
              <Text style={styles.subTitle}>{route.params.time} mins</Text>
            </View>
            <Text style={{ color: "gray", margin: 5, fontSize: 18 }}>
              {route.params.cuisines}
            </Text>

            <View style={{ flexDirection: "row", margin: 5 }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>Outlet</Text>
              <Text style={{ paddingLeft: 10, fontSize: 15, color: "gray" }}>
                {route.params.adress}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 15, marginLeft: 5 }}>
                {route.params.time} mins
              </Text>
              <Text style={{ paddingLeft: 10, fontSize: 15, color: "gray" }}>
                Home
              </Text>
            </View>
            <Text style={styles.line} />
            <View style={styles.bycleContainer}>
              <FontAwesome5 name="bicycle" size={24} color="orange" />
              <Text style={styles.subTitle}>0-3 kms</Text>
              <Text style={styles.subTitle}>35 Delivery Fee will Apply</Text>
            </View>
          </View>
        </View>
        <Text style={{ textAlign: "center", fontSize: 17, fontWeight: "500" }}>
          MENU
        </Text>
        <Text style={same.linee} />

        {route.params.menu.map((item, index) => (
          <FoodItem key={index} item={item} />
        ))}
      </ScrollView>
      <Pressable style={styles.pressable} onPress={() => toggleModal()}>
        <MaterialIcons
          style={{ textAlign: "center" }}
          name="menu-book"
          size={24}
          color="white"
        />
        <Text style={styles.menu}>Menu</Text>
      </Pressable>
      <Modal isVisible={modalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modal}>
          {menu.map((item, i) => (
            <View style={styles.mapView} key={i}>
              <Text style={styles.textModal}>{item.name}</Text>
              <Text style={styles.textModal}>{item.items.length}</Text>
            </View>
          ))}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: 120, height: 70, resizeMode: "contain" }}
              source={{
                uri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza",
              }}
            />
          </View>
        </View>
      </Modal>
      {total === 0 ? null : (
        <Pressable style={styles.totalPrice}>
          <View style={styles.totalView}>
            <View>
              <Text style={styles.totalText1}>
                {cart.length} items | {total} TL{" "}
              </Text>
              <Text style={styles.totalText2}>Extra Charges may apply! </Text>
            </View>
            <Pressable onPress={()=>navigation.navigate('Card',{name:route.params.name,price:route.params.price})}>
              <Text style={styles.viewCartText}>View Cart</Text>
            </Pressable>
          </View>
        </Pressable>
      )}
    </>
  );
};

export default MenuScreen;
const same = StyleSheet.create({
  linee: {
    borderColor: "gray",
    borderWidth: 0.6,
    height: 1,
    marginTop: 12,
  },
});

const styles = StyleSheet.create({
  header: {
    height: 300,
    backgroundColor: "#B0C4DE",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  subTitle: {
    marginLeft: 7,
    color: "gray",
    fontSize: 16,
  },
  line: {
    ...same.linee,
    marginHorizontal: 12,
  },
  ıconHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 10,
  },
  whiteContainer: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginVertical: 5,
    height: 210,
    borderRadius: 15,
  },
  subTitle: {
    fontSize: 18,
    color: "black",
    marginLeft: 3,
    fontWeight: "400",
  },
  bycleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginLeft: 5,
  },
  pressable: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    backgroundColor: "black",
    alignItems: "center",
    marginLeft: "auto",
    bottom: 35,
    right: 25,
    position: "absolute",
  },
  menu: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
  },
  modal: {
    height: 190,
    width: 250,
    backgroundColor: "black",
    position: "absolute",
    bottom: 35,
    right: 10,
    borderRadius: 7,
  },
  textModal: { color: "#D0D0D0", fontWeight: "600", fontSize: 19 },
  mapView: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  totalPrice: {
    backgroundColor: "green",
    width: "90%",
    marginLeft: "auto",
    padding: 10,
    marginRight: "auto",
    marginBottom: 30,
    left: 20,
    borderRadius: 10,
    position: "absolute",
    bottom: 10,
  },
  totalText1: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  totalText2: {
    fontSize: 14,
    fontWeight: "400",
    color: "white",
  },
  totalView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewCartText: { fontSize: 17, fontWeight: "bold", color: "white" },
});
