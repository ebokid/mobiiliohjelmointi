import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import Calculator from "./components/calculator/Calculator";
import CalculatorHistory from "./components/calculator/CalculatorHistory";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Calculator} />
        <Stack.Screen name="History" component={CalculatorHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
