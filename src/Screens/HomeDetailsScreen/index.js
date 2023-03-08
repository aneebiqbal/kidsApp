import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
// import Header from "../../Components/Header";
import { useRoute } from "@react-navigation/native";

const DetailsScreen = () => {
  const route = useRoute();
  const { animal, backgroundColor } = route.params;
  const words = animal?.name.split(" ");
  console.log("details", animal);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={[styles.card,{backgroundColor: backgroundColor}]}>
        <Image source={animal.image} style={styles.image} />
        <View style={styles.dotContainer}>
          <View style={[styles.dot]} />
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          <Text style={styles.firstWord}>{words[0]}</Text> {""}
          <Text style={styles.secondWord}>{words.slice(1).join(" ")}</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    height: "40%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  image: {
    height: 270,
    width: 200,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  firstWord: {
    color: "black",
  },
  secondWord: {
    color: "purple",
  },
});

export default DetailsScreen;
