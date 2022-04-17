import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from "./telas/TelaInicial/TelaInicial";
import TelaConsole from "./telas/TelaConsole/TelaConsole";
import TelaJogo from "./telas/TelaJogo/TelaJogo";
import TelaNuvem from "./telas/TelaNuvem/TelaNuvem";
import { View } from "react-native-web";


const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Início" component = { TelaInicial }/>
        <Stack.Screen name="Consoles" component = { TelaConsole }/>
        <Stack.Screen name="Jogos" component = { TelaJogo }/>
        <Stack.Screen name="Nuvem" component = { TelaNuvem }/>
      </Stack.Navigator>
      
    </NavigationContainer>
  )
};