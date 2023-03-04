import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const AnimalCard = ({ animal, backgroundColor }) => {
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: backgroundColor }]}>
      <View style={styles.imageContainer}>
      <Image
          source={animal.image}
          style={styles.image}
          resizeMode='contain'
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{animal.name}</Text>
        <Text numberOfLines={2} style={styles.description}>{animal.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        padding: 50,
        margin: 10,
        elevation: 5,
        width: '100%',
        alignItems: 'center',
        maxWidth: 300,
      },
      imageContainer: {
        position: 'absolute',
        left: -45,
        zIndex: 1,
        top: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
      },
      image: {
        width: 140,
        height: 140,
      },
      detailsContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
      },
      description: {
        color: 'white',
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
      },
});

export default AnimalCard;
