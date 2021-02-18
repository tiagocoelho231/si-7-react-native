import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

export default function CustomImage({
  aspectRatio = 906 / 514,
  caption,
  source,
  ...props
}) {
  Image.getSize(source.uri, a => {
    console.log('a', a);
  });
  return (
    <View
      style={styles.container}
      onLayout={event => console.log('view', event.nativeEvent)}
    >
      <Image
        resizeMode="contain"
        source={source}
        style={[styles.image, { aspectRatio }]}
        {...props}
        onLayout={event => console.log('image', event.nativeEvent)}
      />
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width
  },
  image: {
    maxWidth: Dimensions.get('window').width
  },
  caption: {
    backgroundColor: '#a0a0a0',
    color: '#ffffff',
    fontWeight: '700',
    padding: 10,
    textAlign: 'center'
  }
});
