import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

export default function CustomImage({
  aspectRatio = {
    width: 906,
    height: 514
  },
  caption,
  height,
  source,
  width = Dimensions.get('window').width,
  ...props
}) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={source}
        style={{
          ...styles.image,
          ...{
            height: height || (width * aspectRatio.height) / aspectRatio.width,
            width
          }
        }}
        {...props}
      />
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  caption: {
    backgroundColor: '#a0a0a0',
    color: '#ffffff',
    fontWeight: '700',
    padding: 10,
    textAlign: 'center'
  }
});
