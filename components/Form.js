import React from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";
import { Formik } from "formik";

import { gStyle } from "../styles/styles";

export default function Form({ addArticle }) {
  return (
    <View>
      <Formik
        onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
        }}
        initialValues={{ name: "", anons: "", full: "", img: "" }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              value={props.values.name}
              placeholder="Введите название"
              onChangeText={props.handleChange("name")}
            />
            <TextInput
              style={styles.input}
              value={props.values.anons}
              multiline
              placeholder="Введите анонс"
              onChangeText={props.handleChange("anons")}
            />
            <TextInput
              style={styles.input}
              value={props.values.full}
              multiline
              placeholder="Введите полный текст статьи"
              onChangeText={props.handleChange("full")}
            />
            <TextInput
              style={styles.input}
              value={props.values.img}
              placeholder="Добавить фото"
              onChangeText={props.handleChange("img")}
            />
            <Button title="Добавить" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginTop: 10,
    padding: 15,
    borderColor: "silver",
    borderRadius: 5,
    marginBottom: 15,
  },
});
