import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import Weather from './Weather';
const API_KEY = "a04966587f1271e0e57fc6bd8f2d3a23";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
  };

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({error:error})
      }
    )
  }

  _getWeather(lat, long) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true,
      })
    })
  }

  render() {
    const { isLoaded, error, temperature, name} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        { isLoaded ? (
          <Weather weatherName={name} temp={temperature} />
          ) : (
          <View style={styles.loading}>
            <ActivityIndicator />
            <Text style={styles.loadingText}>공주님을 위한 날씨 로딩중</Text>
            {error ? <Text style={styles.errorText}>{error}</Text>: null}
          </View>
        )} 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    backgroundColor: "transparent",
    color: "red",
    marginBottom: 40,
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 24
  }
});
