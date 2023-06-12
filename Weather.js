import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

export default function Weather({ temperature, condition }) {
  return (
    <View style={styles.container}>
      <Text>{temperature}</Text>
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
})