import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ResultDetail from "../components/ResultsDetail";

const ResultList = ({ title, results }) => {
  return (
    <View>
      <Text style={style.titleStyle}>{title}</Text>
      //for generating list of items present
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultList;
