import React from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList, Image } from "react-native";

export default function RecipeList({ meals, inheritedStyles }) {
  const styles = { ...inheritedStyles, ...ownStyles };

  const Item = ({ meal: {item: {idMeal, strMeal, strMealThumb}} }) => {
    return(
    <View key={idMeal} style={styles.listContainer}>
      <Text style={styles.listItem}>{strMeal}</Text>
      <Image source={{uri: strMealThumb}} style = {{ width: 200, height: 200 }}/>
    </View>)
  };

  return (
    <SafeAreaView>
        <FlatList
          data={meals}
          renderItem={(meal) => (
            <Item meal={meal} />
          )}
          keyExtractor={(item) => item.key}
        />
    </SafeAreaView>
  );
}

const ownStyles = StyleSheet.create({
  listItem: {
    color: "#000",
  },
});
