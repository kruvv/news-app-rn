import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

import { gStyle } from "../styles/styles";

export default function FullInfo(/* { navigation } */ { route }) {
  /* const loadScene = () => {
    navigation.goBack();
  }; */

  console.log("!", route.params.img)
  return (
    <View style={gStyle.main}>
      {route.params.img !== "" ? (
        <Image
          style={styles.image}
          source={{
            uri: route.params.img,
          }}
        />
      ) : (
        <Image
          style={styles.image}
          source={require("../assets/empty-img.png")}
        />
      )}
      <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
      <Text style={styles.full}>{route.params.full}</Text>
      {/* <Button title="На главную" onPress={loadScene} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    fontFamily: "mt-bold",
    fontSize: 22,
    textAlign: "center",
    color: "#f55151",
  },
  header: {
    fontSize: 25,
    marginTop: 25,
  },
  image: {
    width: "100%",
    height: 200,
  },
});
