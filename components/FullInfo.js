import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { gStyle } from "../styles/styles";

export default function FullInfo(/* { navigation } */  { route }) {
  /* const loadScene = () => {
    navigation.goBack();
  }; */
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text>{route.params.full}</Text>
      {/* <Button title="На главную" onPress={loadScene} /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
