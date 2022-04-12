import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import { Pressable, Image } from 'react-native';
import { logToConsole } from 'react-native/Libraries/Utilities/RCTLog';
import styles from './Style';
import background from '../../assets/imagens/fundo-xcloud.png';
import games from '../../assets/imagens/xcloud-2.png';

export default function TelaNuvem() {
    return(
        <ImageBackground source = {background} style = {styles.img}>
            <View>
            <Text style = {styles.Title}>Xbox Cloud Gaming</Text>
            <Text style = {styles.subTitle}> Serviço de streaming de jogos </Text>
            <Text style = {styles.p}>Jogue mais de 100 jogos de console de alta qualidade no seu dispositivo favorito.</Text>

            <Text style = {styles.p}>Desktop, Notebook, console ou até mesmo celular pode se tornar um XBOX.</Text>

            <Text style = {styles.p}>Através de uma assinatura você terá um XBOX virtual sempre que precisar.</Text>
            </View>
            <Image source = {games} style = {styles.games}></Image>
        </ImageBackground>
    );
}