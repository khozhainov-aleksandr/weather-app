import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Weather({ temperature, condition }) {
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <Ionicons name="snow" size={64} color="black" />
        <Text style={styles.temperature}>{temperature}&deg;</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </View>
  );
}

const atmosphere = ['Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Dust', 'Ash', 'Squall', 'Tornado'];

Weather.PropTypes = {
  temperature: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm', 'Drizzle', 'Rain', 'Snow', [...atmosphere], 'Clear', 'Clouds'
  ]).isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperature: {
    fontSize: 32
  }
})