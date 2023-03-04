import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Header, Icon } from "react-native-elements";
import Images from "../theme/Images";

// const navigation = useNavigation();
const AppHeader = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.menu}>Wildlife Warriors</Text>
        <Text style={styles.Description}></Text>
      </View>
      <Image source={Images.koala} style={styles.animal} />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 80,
  },
  menu: {
    color: "black",
    fontSize: 18,
    fontWeight: "600",
  },
  Description: {
    color: "white",
    fontSize: 13,
    fontWeight: "400",
  },
  animal: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 90,
  },
});

export default AppHeader;
