import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2c2e2d',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardImage: {
      width: 80,
      height: 80,
      marginRight: 10,
    },
    card:{
      backgroundColor: 'green',
      alignItems:'center',
      width:250,
      flexDirection: 'row',
      borderRadius: 10,
      marginBottom:20,
      paddingVertical: 10,
      paddingHorizontal:20,
  
    },
    text:{
      color:'#fff',
      fontSize: 16,
      textAlign: 'left',
      width:100,
      fontWeight:'500',
     
    },
    descricao:{
      color:'#b2b2b2',
      marginBottom:30,
      marginTop:10,
      textAlign:'center',
  
    },
    logo:{
      borderRadius:90,
      width:70,
      marginBottom:10,
    },
    Xbox:{
      color:'#107c0f',
      fontWeight:'bold',
      fontSize:26,
    }
  });

  export default styles;