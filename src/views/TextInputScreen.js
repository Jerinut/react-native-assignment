import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default function TextInputScreen({ navigation }) {
  return (
    <View style={styles.container}>
       <Text>Text Input Screen</Text> 
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