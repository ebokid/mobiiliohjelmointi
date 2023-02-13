import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text}>Select Exercise</Text>
      </View>
      <View style={styles.item}>
        <Button
          title="Recipe Search"
          onPress={() => navigation.navigate("Recipes")}
        />
      </View>
      <View style={styles.item}>
        <Button
          title="Currency Exchange"
          onPress={() => navigation.navigate("Exchange")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BFDBA3",
    minHeight: "100%",
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 50
  },
  item: {
    marginVertical: 20,
    width: '100%',
  },
  text: {
    fontSize: 20
  }
});
