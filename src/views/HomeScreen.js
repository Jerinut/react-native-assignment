import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text>Some Text</Text> */}
      <Button title="Random Joke" style ={styles.btnContainer} onPress={() => navigation.navigate('RandomJoke')} />
      <Button title="Text Input" style ={styles.btnContainer} onPress={() => navigation.navigate('TextInput')} />
      <Button title="Never-ending Jokes" style ={styles.btnContainer} onPress={() => navigation.navigate('NeverEndingJokeList')} />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flex:1,
    margin:10,
  }
});