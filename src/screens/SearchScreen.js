import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [searchterm, setSearchterm] = useState("");
  return (
    <View>
      <SearchBar
        onTermSubmit={console.log("This is subbmited!!")}
        searchTerm={searchterm}
        onTermChange={(newTerm) => setSearchterm(newTerm)}
      />
      <Text>Search!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
