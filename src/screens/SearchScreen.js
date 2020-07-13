import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [searchterm, setSearchterm] = useState("");
  return (
    <View>
      <SearchBar />
      <Text>Search!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
