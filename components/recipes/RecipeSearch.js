import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Button,
  TextInput,
  Text
} from "react-native";
import { MEAL_DB_API_URL } from "@env";

import RecipeList from "./RecipeList";

export default function RecipeSearch() {
  const [keyword, setKeyword] = useState("");
  const [repositories, setRepositories] = useState([]);

  const getRepositories = () => {
    fetch(`${MEAL_DB_API_URL}/filter.php?i=${keyword}`)
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data.meals);
      })
      .catch((error) => {
        Alert.alert("Error", error);
      });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <TextInput
            style={[styles.input]}
            onChangeText={(input) => setKeyword(input)}
            value={keyword}
            keyboardType="text"
          />
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              title="Recipe Search"
              onPress={() => getRepositories()}
            />
          </View>
        </View>
        <View>
          {(repositories 
          && repositories.length > 0) ? (
            <RecipeList meals={repositories} inheritedStyles={styles} />
          ) : <Text style={styles.noResults}>No results</Text>}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container: {
    backgroundColor: '#BFDBA3',
    minHeight: '100%'
},
  listContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 30,
    marginVertical: 10,
  },
  listItem: {
    color: "#000",
    margin: 5,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#bbbbbbc0",
  },
  buttonContainer: {
    marginTop: 20,
  },
  noResults: {
    marginHorizontal: 30,
    marginVertical: 10,
  }
});
