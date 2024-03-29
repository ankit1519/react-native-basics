import React from "react";
import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from "react-native"

function AppPro(): JSX.Element{
    const isDarkMode=useColorScheme()==='dark';
    return(
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText: styles.blackText}> HI I am Ankit</Text>
            <Text style= {isDarkMode ? styles.whiteText: styles.blackText}> HI I am Ankit</Text>
            <Text style= {isDarkMode ? styles.whiteText: styles.blackText}> HI I am Ankit</Text>
            
        </View>
       
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    whiteText:{
        color:'red',
       
    },
    blackText:{
        color:'blue',
        
    }
})
export default AppPro;