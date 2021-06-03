import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { gStyle } from "../styles/styles";

export default function Main({ navigation }) {
  const loadScene = (item) => {
    navigation.navigate("FullInfo", item);
  };

  const [news, setNews] = useState([
    { name: "Google", anons: "Gogle!!!", full: "Google is cool!!!!!" },
    { name: "Apple", anons: "Apple!!!", full: "Apple is cool!!!!!" },
    { name: "Vk", anons: "Vk!!!", full: "Vk is cool!!!!!" },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => loadScene(item)}>
      <Text>{item.name}</Text>
      <Text>{item.anons}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Главная страница</Text>
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
