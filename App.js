import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text
} from 'react-native';
import CustomImage from './components/CustomImage';
import Greeting from './components/Greeting';

const name = 'Inigo Montoya';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
        >
          <Greeting name={name} />
          <Text style={styles.text}>You killed my father. Prepare to die.</Text>
          <CustomImage
            source={require('./assets/inigo-montoya.png')}
            caption="Inigo Montoya"
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingVertical: 20
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center'
  }
});
