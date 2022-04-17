import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button} from 'react-native';
import { Pressable, Image } from 'react-native';
import { logToConsole } from 'react-native/Libraries/Utilities/RCTLog';
import styles from './Style';

import imgLogo from "../../assets/imagens/logo.png";
import halo from "../../assets/imagens/jogo-1.png";
import xcloud from "../../assets/imagens/xcloud-1.png";
import console from "../../assets/imagens/console-1.png";

export default function TelaInicial(props) {
  return (
    <View style={styles.container }>
    <Image source = {imgLogo} style={styles.logo}/>
    <Text style={styles.Xbox}>Xbox</Text>

    <Text style={styles.descricao}>Xbox é uma marca de consoles criada pela Microsoft. Toque nos cards para conhecer.</Text>

    <View>
      <Pressable style={styles.card} onPress = { () => { props.navigation.navigate('Consoles') } } >
        <Image source={console} style={styles.cardImage} />
        <Text style= {styles.text} >Conheça os consoles</Text>
      </Pressable>

      <Pressable style={styles.card} onPress = { () => { props.navigation.navigate('Jogos') } }>
      <Image source={halo} style={styles.cardImage} />
        <Text style= {styles.text}>Conheça os jogos</Text>
      </Pressable>

      <Pressable style={styles.card} onPress = { () => { props.navigation.navigate('Nuvem') } }>
      <Image source={xcloud} style={styles.cardImage}/>
        <Text style= {styles.text}>Conheça o xCloud</Text>
      </Pressable>
    </View>

      <StatusBar style="auto" />
    </View>
  );
}