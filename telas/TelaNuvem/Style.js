import { StyleSheet } from "react-native";
import { reportLogBoxError } from "react-native/Libraries/LogBox/Data/LogBoxData";
const styles = StyleSheet.create({
    img:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
    },
    games:{
        width:320,
        height:180,
        borderRadius: 5,
    },
    Title:{
        color:'#107C0f',
        fontSize:25,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom: 10,
    },
    subTitle:{
        color:'#b2b2b2',
        fontWeight:'bold',
        fontSize: 18,
        textAlign: 'center',
        marginBottom:20,
    },
    p:{
        color:'#b2b2b2',
        width:320,
        textAlign:'center',
        marginBottom:15,
    }

});

export default styles;