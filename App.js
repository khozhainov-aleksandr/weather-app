import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    (async () => {
      try {
        await Location.requestForegroundPermissionsAsync();
        const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
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
