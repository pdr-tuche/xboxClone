import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
        container: {
            backgroundColor:"#e6e6e6",
        },
        console:{
            height:200,
            width:200,
        },
        box:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            padding: 20,
        },
        title:{
            color:'#107C10',
            fontSize: 30,
            margin:5,
            fontWeight:'bold',
        },
        subTitle:{
            color:'black',
            fontWeight:'bold',
            fontSize:18,
            textAlign:'center',
            marginBottom:10,
        },
        description:{
            fontSize:16.5,
            textAlign:'center',
        }

});

export default styles;