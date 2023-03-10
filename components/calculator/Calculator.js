import React, { useState } from "react";
import {
  SafeAreaView,
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";

export default function Calculator({ navigation }) {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operations, setOperations] = useState([]);
  const [result, setResult] = useState(null);

  const saveOperation = (operation) => {
    setOperations([...operations, operation]);
  };

  const plus = () => {
    const res = number1 + number2;
    saveOperation(number1 + " + " + number2 + " = " + res);
    setResult(res);
  };
  const minus = () => {
    const res = number1 - number2;
    saveOperation(number1 + " - " + number2 + " = " + res);
    setResult(res);
  };

  const Item = ({ title }) => (
    <View style={styles.historyContainer}>
      <Text style={styles.historyItem}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Result: {result && parseInt(result)}</Text>
        <TextInput
          style={[styles.input, styles.bag]}
          onChangeText={(n1) => n1 && setNumber1(parseInt(n1))}
          value={number1}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.bag]}
          onChangeText={(n2) => n2 && setNumber2(parseInt(n2))}
          value={number2}
          keyboardType="numeric"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button color="#4B637A" title="+" onPress={() => plus()}>
              Button
            </Button>
          </View>
          <View style={styles.buttonStyle}>
            <Button color="#4B637A" title="-" onPress={() => minus()}>
              Button
            </Button>
          </View>
          <View style={styles.historyButton}>
            <Button
              title="History"
              onPress={() =>
                navigation.navigate("History", {
                  operations,
                  inheritedStyles: styles,
                })
              }
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#666",
    height: "100%",
  },
  input: {
    fontSize: 22,
    color: "#fff",
    height: 50,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#000000c0",
  },
  text: {
    color: "#fff",
    margin: 20,
    fontSize: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    marginHorizontal: 20,
    marginTop: 5,
    height: 50,
    width: 50,
  },
});
