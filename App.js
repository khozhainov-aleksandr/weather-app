import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import Loading from './Loading';
import Weather from './Weather';

const API_KEY = '0574b4b5f55e3a70926870f067de4922';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState(null);
  const [condition, setCondition] = useState(null);

  async function getWeather(latitude, longitude) {
    const { data: {main: {temp}, weather} } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    setIsLoading(false);
    setTemp(Math.round(temp));
    setCondition(weather[0].main);
  }
  
  useEffect(() => {
    (async () => {
      try {
        await Location.requestForegroundPermissionsAsync();
        const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
        getWeather(latitude, longitude);
      } catch (error) {
        Alert.alert('Permission to access location', 'Was Denied !')
      }
      
    })();
  }, []);

  return (
    isLoading
      ? <Loading />
      : <Weather temperature={temp} condition={condition} />
  );
}
