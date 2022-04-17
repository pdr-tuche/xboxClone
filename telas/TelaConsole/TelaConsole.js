  
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import styles from './Style';

import serieS from "../../assets/imagens/console-1.png";
import serieX from "../../assets/imagens/console-2.png"

export default function TelaConsole(props) {
  return (
    <ScrollView style={styles.container}>
      <View style = {styles.box}>
      <Image source = {serieS} style={styles.console}/>
      <Text style = {styles.title}>XBOX SERIES S</Text>
      <Text style = {styles.subTitle}>Desempenho de última geração no menor Xbox de todos os tempos.</Text>
      <Text style = {styles.description}>
        O Series S é pra quem busca jogos de nova geração gastando pouco. é o console mais barato da nova geração. Ele é o equilibrio entre gráfico e performance.
      </Text>
      </View>

      <View style = {styles.box}>
      <Image source = {serieX} style = {styles.console} />
      <Text style = {styles.title}>XBOX SERIES X</Text>
      <Text style = {styles.subTitle}>O Xbox mais rápido e poderoso de todos os tempos.</Text>
      <Text style = {styles.description}>
        O Series X é pra quem quer poder absoluto. O console mais poderoso do mercado, excelência em gráficos e performance.
      </Text>
      </View>
    </ScrollView>

   
  );
}
