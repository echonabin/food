import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' size={30} style={styles.iconStyle} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Search'
        style={styles.inputStyle}
        value={searchTerm}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#e8e8e8",
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
