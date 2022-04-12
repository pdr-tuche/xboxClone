import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaInicial from "./telas/TelaInicial/TelaInicial";
import TelaConsole from "./telas/TelaConsole/TelaConsole";
import TelaJogo from "./telas/TelaJogo/TelaJogo";
import TelaNuvem from "./telas/TelaNuvem/TelaNuvem";
import { View } from "react-native-web";


const Tabs = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Tabs.Navigator>
        <Tabs.Screen name="Início" component = { TelaInicial }/>
        <Tabs.Screen name="Consoles" component = { TelaConsole }/>
        <Tabs.Screen name="Jogos" component = { TelaJogo }/>
        <Tabs.Screen name="Nuvem" component = { TelaNuvem }/>
      </Tabs.Navigator>
      
    </NavigationContainer>
  )
};