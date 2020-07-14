import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchterm, setSearchterm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchterm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 20,
          term: searchterm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage("Some thing went wrong!!");
    }
  };
  //searchApi("pasta");
  console.log(searchApi);

  useEffect(() => {
    searchApi("pizza");
  }, []);

  return (
    <View>
      <SearchBar
        onTermSubmit={searchApi}
        searchTerm={searchterm}
        onTermChange={setSearchterm}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results.</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
