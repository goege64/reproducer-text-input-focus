/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView, StyleSheet, View, Button, TextInput} from 'react-native';

// TextInput is forced to have focus, causes problems in Android 7

function App(): React.JSX.Element {
  return (
    <View style={styles.view}>
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <Button onPress={() => console.log('pressed')} title="Button" />
      <View style={styles.separator} />
      <ScrollView style={styles.scrollView}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        {/* After focusing an input once, this button cant be pressed */}
        {/* After setting the `useEditTextStockAndroidFocusBehavior` feature flag to `false`, it can be pressed after an initial press to focus off of the input */}
        <Button onPress={() => console.log('pressed')} title="Button" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: '5%',
  },
  separator: {
    height: 2,
    width: '100%',
    backgroundColor: '#000000',
    marginVertical: 20,
  },
  scrollView: {
    flex: 1,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#000000',
  },
});

export default App;
