import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function RandomJokeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Random Joke Screen</Text>
      {/* <Button title="Random Joke" onPress={() => navigation.navigate('RandomJoke')} />
      <Button title="Text Input" onPress={() => navigation.navigate('TextInput')} />
      <Button title="Never-ending Jokes" onPress={() => navigation.navigate('NeverEndingJokeList')} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});