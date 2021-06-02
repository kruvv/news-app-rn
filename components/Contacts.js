import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { gStyle } from "../styles/styles";

export default function Contacts() {
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Наши контакты</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
