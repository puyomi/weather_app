import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Proptypes from 'prop-types';

const weatherCases = {
    Rain: {
        colors: ['#00C6FB', "#005BEA"],
        title: "Raining like a MF",
        subtitle:"For more info Look outside!",
        icon: 'ios-rainy',
    },
    Clear: {
        colors: ['#FEF253', "#FF7300"],
        title: "Sunny as Fuck",
        subtitle:"Go get your ass burnt",
        icon: 'ios-sunny',        
    },
    Thunderstorm: {
        colors: ['#00ECBC', "#007ADF"],
        title: "ThunderStorm in house",
        subtitle:"Actually outside of the house ",
        icon: 'ios-thunderstorm',        
    },
    Clouds: {
        colors: ['#D7D2CC', "#304352"],
        title: "Clouds",
        subtitle:"I know fuckin boring",
        icon: 'ios-cloudy',        
    },
    Snow: {
        colors: ['#7DE2FC', "#B9B6E5"],
        title: "Cold as balls",
        subtitle:"Do you wanna build a snowman?",
        icon: 'ios-snow',        
    },
    Drizzle: {
        colors: ['#89F7FE', "#66A6FF"],
        title: "Drizzle",
        subtitle:"Is like rain but gay",
        icon: 'ios-rainy-outline',        
    },
}

function Weather({temp, weatherName}){
    console.log(weatherName)
    return(
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name={weatherCases[weatherName].icon}/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}
export default Weather;

Weather.proptypes = {
    temp: Proptypes.number.isRequired,
    name: Proptypes.string
}



const styles = StyleSheet.create({
    container: {
        flex:1
    },
    upper: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "transparent",
    },
    temp: {
        fontSize:48,
        fontWeight:"100",
        color:"white",
        marginTop: 10
    },
    lower: {
        flex:1,
        alignItems:"flex-start",
        justifyContent:"flex-end",
        paddingLeft: 25,
    },
    title: {
        fontSize:38,
        fontWeight:"300",
        backgroundColor: "transparent",
        color:"white",
        marginBottom: 10
    },
    subtitle: {
        fontSize:24,
        fontWeight:"100",
        backgroundColor: "transparent",
        color:"white",
        marginBottom: 24
    }
});