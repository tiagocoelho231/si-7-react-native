import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CustomButton({
  color = '#406080',
  onPress,
  textStyle,
  title = 'Button',
  style,
  ...props
}) {
  return (
    <TouchableOpacity
      onPress={onPress || (() => alert("I'm an useless button..."))}
      style={{ ...styles.button, ...{ backgroundColor: color }, ...style }}
      {...props}
    >
      <Text style={{ ...styles.buttonText, ...textStyle }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20
  }
});
