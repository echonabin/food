import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [searchterm, setSearchterm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  //This fileterResultsByPrice is a function that
  //filter the result by price, it had return key
  //with a filter javascript inbuilt object which
  //filter object that passed according to the user preference
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        onTermSubmit={searchApi}
        searchTerm={searchterm}
        onTermChange={setSearchterm}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results.</Text>

      <ResultList results={filterResultsByPrice("$")} title='Cost Effective' />
      <ResultList results={filterResultsByPrice("$$")} title='Bit Pricier' />
      <ResultList results={filterResultsByPrice("$$$")} title='Big Spender' />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
