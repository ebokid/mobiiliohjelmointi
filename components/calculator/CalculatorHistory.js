import React from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";

export default function CalculatorHistory({ route }) {
  const { operations, inheritedStyles } = route.params;
  const styles = { ...inheritedStyles, ...ownStyles };

  const Item = ({ title }) => (
    <View style={styles.historyContainer}>
      <Text style={styles.historyItem}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.historyContainer}>
          <Text style={styles.historyItem}>History:</Text>
        </View>
        <FlatList
          data={operations}
          renderItem={({ item, index }) => (
            <Item _key={item.key + index} title={item} />
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    </SafeAreaView>
  );
}

const ownStyles = StyleSheet.create({
  historyContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  historyItem: {
    color: "#fff",
    margin: 5,
  },
});
