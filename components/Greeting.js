import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Greeting({ name }) {
  return <Text style={styles.text}>Hello, my name is {name}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: '#202080',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20
  }
});
