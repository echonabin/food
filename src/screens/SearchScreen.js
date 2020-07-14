import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [searchterm, setSearchterm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        onTermSubmit={searchApi}
        searchTerm={searchterm}
        onTermChange={setSearchterm}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results.</Text>
      <ResultList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
