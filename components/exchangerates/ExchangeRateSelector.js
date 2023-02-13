import React, { useState } from "react";
import {
  View,
  StyleSheet
} from "react-native";
import { Picker } from "@react-native-picker/picker";


export default function ExchangeRateSelector({symbols, selectedSymbol, setSelectedSymbol}) {
  const renderSymbols = () => {
    return symbols.map((symbol) => {
      return <Picker.Item key={symbol} label={symbol} value={symbol}/>
    })
  }
  return (
    <View>
        <Picker
          style={[styles.input]}
          selectedValue={selectedSymbol}
          onValueChange={(itemValue, itemIndex) => setSelectedSymbol(itemValue)}
        >
          {renderSymbols()}
        </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BFDBA3",
    minHeight: "100%",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#bbbbbbc0",
  },
});
