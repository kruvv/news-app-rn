import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { gStyle } from "../styles/styles";
import { set } from "react-native-reanimated";
import Form from "./Form";

export default function Main({ navigation }) {
  const loadScene = (item) => {
    navigation.navigate("FullInfo", item);
  };

  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Gogle!!!",
      full: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, est! Nulla cum optio numquam? Doloribus soluta ipsum, harum beatae dolor distinctio? Accusantium inventore commodi recusandae.",
      key: "1",
      img: "https://seoukraine.com.ua/wp-content/uploads/2020/12/5-6.jpg",
    },
    {
      name: "Apple",
      anons: "Apple!!!",
      full: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam alias, laudantium mollitia, quo sint earum corrupti consequuntur tempora minus repellendus sunt obcaecati. Aut delectus fugit facilis perspiciatis voluptas numquam?",
      key: "2",
      img: "https://s3-symbol-logo.tradingview.com/apple--600.png",
    },
    {
      name: "Vk",
      anons: "Vk!!!",
      full: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, eos obcaecati adipisci dolores saepe delectus sit temporibus deleniti laudantium quod.",
      key: "3",
      img: "https://pbs.twimg.com/media/Ex3r-6ZWQAA3vCz.jpg",
    },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => loadScene(item)}>
      <Image
        style={styles.image}
        source={{
          uri: item.img,
        }}
      />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.anons}>{item.anons}</Text>
    </TouchableOpacity>
  );

  const [modalWindow, setModalWindow] = useState(false);

  const openModal = () => {
    setModalWindow(true);
  };

  const closeModal = () => {
    setModalWindow(false);
  };

  const addArticle = (article) => {
    setNews((list) => {
      arguments.key = String(new Date().getTime());
      console.log("key", arguments.key);
      return [article, ...list];
    });
    setModalWindow(false);
  };

  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
        <View style={gStyle.main}>
          <Ionicons
            name="close-circle-sharp"
            size={40}
            color="red"
            style={styles.iconClose}
            onPress={closeModal}
          />
          <Text style={gStyle.title}>Добавить новую статью</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <Ionicons
        name="add-circle-sharp"
        size={40}
        color="green"
        style={styles.iconAdd}
        onPress={openModal}
      />
      <Text style={gStyle.title}>Главная страница</Text>
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  item: {
    width: "100%",
    marginBottom: 30,
  },
  title: {
    fontFamily: "mt-bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 20,
    color: "#474747",
  },
  anons: {
    fontFamily: "mt-light",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    color: "#474747",
  },
  image: {
    width: "100%",
    height: 200,
  },
  iconAdd: {
    textAlign: "right",
    marginBottom: 15,
  },
  iconClose: {
    textAlign: "right",
  },
});
