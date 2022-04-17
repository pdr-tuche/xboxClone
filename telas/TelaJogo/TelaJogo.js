import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import { Pressable, Image } from 'react-native';
import { logToConsole } from 'react-native/Libraries/Utilities/RCTLog';
import styles from './Style';


import Forza from "../../assets/imagens/jogo-3.png";
import Halo from "../../assets/imagens/jogo-4.png";
import Cyber from "../../assets/imagens/jogo-2.png";
import { ScrollView } from 'react-native-gesture-handler';


export default function TelaJogo(props) {
    return(
        <ScrollView>
            <View style = {styles.pagina}>
                <Text style = {styles.title}>Jogos em 4k</Text>

                <Text style = {styles.desTitle}>Os principais jogos estão aqui. Veja abaixo três exemplos de grande sucesso.</Text>


                <View style = {styles.cards}>
                    <ImageBackground source = {Forza} style = {styles.img}>
                        <Text style = {styles.imgTitle}>Forza Horizon 5</Text>
                    </ImageBackground>
                    <Text style = {styles.descriptionColor}>
                        Forza Horizon 5 é um jogo de corrida. É o quinto jogo da série Forza Horizon e o décimo segundo título principal da franquia Forza. O jogo se passa em uma representação ficcional do México. 
                    </Text>
                </View>

                <View style = {styles.cards}>
                    <ImageBackground source = {Cyber} style = {styles.img}>
                    <Text style = {styles.imgTitle}>Cyberpunk 2077</Text>
                    </ImageBackground>
                    <Text style = {styles.descriptionColor}>
                    Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e publicado pela CD Projekt.
                    </Text>
                </View>

                <View style = {styles.cards}>     
                    <ImageBackground source = {Halo} style = {styles.img}>
                    <Text style = {styles.imgTitle}>Halo 5</Text>
                    </ImageBackground>
                    <Text style = {styles.descriptionColor}>
                    Halo 5: Guardians é um videojogo de tiro em primeira pessoa, parte da franquia Halo e sequência de Halo 4.
                    </Text>
                </View> 

            </View>
        </ScrollView>
        );
            }