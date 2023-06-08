import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import Loading from './Loading';

const API_KEY = '0574b4b5f55e3a70926870f067de4922';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  async function getWeather(latitude, longitude) {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    console.log('✅', data);
  }
  
  useEffect(() => {
    (async () => {
      try {
        await Location.requestForegroundPermissionsAsync();
        const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
        getWeather(latitude, longitude);
        setIsLoading(false);
      } catch (error) {
        Alert.alert('Permission to access location', 'Was Denied !')
      }
      
    })();
  }, []);

  return (
    isLoading ? <Loading /> : null
  );
}
