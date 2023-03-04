import { View, Text, SafeAreaView, FlatList, Animated } from "react-native";
import React, { useRef, useEffect } from "react";
import Header from "../../Components/Header";
import AnimalCard from "../../Components/AnimalCard";
import { animals } from "../../utils/dummyData";
import Lottie from "lottie-react-native";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const HomeScreen = () => {
 

  const renderItem = ({ item }) => {
    const minColorValue = 16; // adjust this value to set the minimum brightness of the color

    let red, green, blue;
    do {
      red = Math.floor(Math.random() * (256 - minColorValue) + minColorValue);
      green = Math.floor(Math.random() * (256 - minColorValue) + minColorValue);
      blue = Math.floor(Math.random() * (256 - minColorValue) + minColorValue);
    } while (red + green + blue > 128 * 3);

    const backgroundColor = `#${red.toString(16)}${green.toString(
      16
    )}${blue.toString(16)}`;
    return <AnimalCard animal={item} backgroundColor={backgroundColor} />;
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Header left />
      <View>
        <AnimatedFlatList
          scrollEventThrottle={16}
          data={animals}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 50,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
