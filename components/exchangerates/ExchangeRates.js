import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Button,
  TextInput,
  Text,
} from "react-native";
import ExchangeRateSelector from "./ExchangeRateSelector";

import { EXCHANGERATE_API_URL, EXCHANGERATE_API_KEY } from "@env";
const EURO_SYMBOL = "EUR";

const myHeaders = new Headers();
myHeaders.append("apikey", EXCHANGERATE_API_KEY);

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

export default function ExchangeRates() {
  const [symbols, setSymbols] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState("");
  const [amount, setAmount] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  const getSymbolsFromData = (data) => {
    if (data && data.symbols) {
      return Object.keys(data.symbols);
    }
    return [];
  };

  const fetchSymbols = () => {
    fetch(`${EXCHANGERATE_API_URL}/symbols`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const newSymbols = getSymbolsFromData(data);
        setSymbols(newSymbols);
        if (!selectedSymbol) setSelectedSymbol(newSymbols[0]);
      })
      .catch((error) => console.log("error", error));
  };

  const fetchConvert = () => {
    fetch(
      `${EXCHANGERATE_API_URL}/convert?to=${EURO_SYMBOL}&from=${selectedSymbol}&amount=${amount}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {;
        setConvertedAmount(data.result);
      })
      .catch((error) => console.log("error", error));
  };

  // Should be handled with useEffect or similar
  if (symbols.length < 1) fetchSymbols();

  return (
    <SafeAreaView>
      <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.resultText}>{!!convertedAmount && ( <>Result: {convertedAmount} €</>)}</Text>
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            style={[styles.input, styles.inputItem]}
            onChangeText={(n1) => setAmount(parseInt(n1))}
            value={amount}
            keyboardType="numeric"
          />
          <View style={styles.inputItem}>
            {symbols && symbols.length > 0 && (
              <ExchangeRateSelector
                symbols={symbols}
                selectedSymbol={selectedSymbol}
                setSelectedSymbol={setSelectedSymbol}
              />
            )}
          </View>
        </View>
        <View style={styles.buttonContainer}>
        <Button
          title="Convert"
          onPress={() => fetchConvert()}
        />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BFDBA3",
    minHeight: "100%",
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: 50,
    marginVertical: 20
  },
  inputItem: {
    width: 100,
    marginHorizontal: 20
  },
  input: {
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#bbbbbbc0",
  },
  buttonContainer: {
    marginLeft: 40,
    width: 240
  },
  resultText: {
    fontSize: 20
  }
});
