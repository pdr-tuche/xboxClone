# xboxClone
Decidi pôr em prática, por meio deste projeto, o conhecimento sobre Reactive Native que adquiri nas últimas semanas do curso de Reactive Native do <a href="https://www.devmedia.com.br">DevMedia</a>. Para tanto, estilizei quatro telas separadamente e utilizei o stack navigation da biblioteca `@react-navigation/stack` para fazer a conexão entre as páginas.
<b><p align = "center">Telas que usei de referencia:</p></b>
<div display = "flex" flex-wrap="nowrap" align = "center">
  <img src = "https://github.com/pdr-tuche/xboxClone/blob/main/assets/imagens/fotoTelas/tela-inicial.jpeg" width = "150px">
  <img src = "https://github.com/pdr-tuche/xboxClone/blob/main/assets/imagens/fotoTelas/tela-consoles.jpeg" width = "150px">
  <img src = "https://github.com/pdr-tuche/xboxClone/blob/main/assets/imagens/fotoTelas/tela-jogos-1.jpeg" width = "150px">
  <img src = "https://github.com/pdr-tuche/xboxClone/blob/main/assets/imagens/fotoTelas/tela-nuvem.jpeg" width = "150px">
  <h5>O resultado final terá que ser parecido com essas telas</h5>
</div>

<br>

<p> Inicialmente, criei rotas em App.js para as telas se comunicarem.</p>
  <p>criando rotas em <a href= "https://github.com/pdr-tuche/xboxClone/blob/main/App.js">App.js</a>: </p>
  

~~~javascript  
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
~~~
    
Após a estilização dos componentes (telas), criei conexões entre os cards da tela inicial e as suas respectivas telas por meio de funções implementadas nos próprios cards.
<div display = "flex" >
  <p> criando conexões em <a href = "https://github.com/pdr-tuche/xboxClone/tree/main/telas/TelaInicial"> TelaInicial</a>:</p>

~~~javascript
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
~~~

Toda a estilização individual das telas encontra-se nos arquivos `Style.js` presentes na pasta <a href= "https://github.com/pdr-tuche/xboxClone/tree/main/telas">telas</a>

É possivel ver o resultado final no <a href= "https://www.youtube.com/watch?v=eQ34eIrTPPw">youtube<img src="./imagensReadme/youtubeicon.png" width = "50px"></a>
<a href = "https://drive.google.com/file/d/1i7A-btg-RbiEkwqrTJQGN5ujuHizDaYa/view?usp=sharing"> baixe o APK aqui.</a>
