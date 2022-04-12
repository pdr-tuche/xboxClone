import { StyleSheet } from "react-native";
import { reportLogBoxError } from "react-native/Libraries/LogBox/Data/LogBoxData";
const styles = StyleSheet.create({
    pagina:{
        backgroundColor:'#121212',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:30,
    },
    title:{
        color: "#107C0f",
        fontSize:20,
        fontWeight:'bold',
        marginBottom: 10,
    },
    desTitle:{
        color:'#b2b2b2',
        textAlign:'center',
        marginBottom: 20,
    },
    cards:{
        width:320,
        marginBottom: 50,
    },
    img: {
        width:320,
        height:180,
        marginBottom: 10,
    },
    imgTitle:{
        color:'#fff',
        fontSize: 20,
        fontWeight:'bold',
        padding: 5,
        paddingHorizontal:20,
        backgroundColor: 'rgba(92, 92, 92, 0.5)',
    },
    descriptionColor:{
        color:'#d5d5d5',
    }    
});

export default styles;