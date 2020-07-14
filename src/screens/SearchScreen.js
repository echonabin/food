import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchterm, setSearchterm] = useState("");
  const [results, setResults] = useState([]);
  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        searchterm: term,
        location: "san jose",
      },
    });
  };
  setResults(response.data.businesses);
  return (
    <View>
      <SearchBar
        onTermSubmit={searchApi}
        searchTerm={searchterm}
        onTermChange={setSearchterm}
      />
      <Text>We have found {results.length} results.</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
