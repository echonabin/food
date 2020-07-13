import React from "react";
import { Text, Views, StyleSheet, TextInput } from "react-native";

const SearchScreen = () => {
  return (
    <Views>
      <TextInput style={styles.textInput} />
    </Views>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default SearchScreen;
