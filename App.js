import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import RecipeSearch from "./components/recipes/RecipeSearch";
import ExchangeRates from "./components/exchangerates/ExchangeRates";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Recipes" component={RecipeSearch} />
        <Stack.Screen name="Exchange" component={ExchangeRates} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
