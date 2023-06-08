import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

export default function Weather({ temperature }) {
  return (
    <View style={styles.container}>
      <Text>{temperature}</Text>
    </View>
  );
}

Weather.PropTypes = {
  temperature: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})