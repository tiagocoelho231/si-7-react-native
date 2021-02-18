import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  Dimensions
} from 'react-native';
import CustomButton from './components/CustomButton';
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
            caption={name}
            source={require('./assets/inigo-montoya.png')}
            width={Dimensions.get('window').width}
          />
          <CustomButton title="I'm a button" />
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
