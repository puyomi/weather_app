import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class Weather extends Component{
    render(){
        return (
            <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
                <View style={styles.upper}>
                    <Ionicons color="white" size={144} name="ios-rainy"/>
                    <Text style={styles.temp}>35°</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>Raining like a MF</Text>
                    <Text style={styles.subtitle}>For more INFO look outside!</Text>
                </View>
            </LinearGradient>
        )
    }
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