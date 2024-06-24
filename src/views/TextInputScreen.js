import React, { useEffect, useState,useFocusEffect } from 'react';
import { View, Button, StyleSheet, TextInput,Alert,Text } from 'react-native';
import { fetchJokeWithTextInput } from '../store/apis/JokesSlice';
import { useDispatch,useSelector } from 'react-redux';

export default function TextInputScreen({ navigation }) {
  const [searchText,setSearchText] = useState("")
  const dispatch = useDispatch()
  const joke = useSelector((state) => state.joke.data);
  const handleSearch = () => {
    if (!searchText) {
      Alert.alert('Validation Error', 'Search Text cannot be empty');
      return;
    }
    console.log(searchText,"search text")
    dispatch(fetchJokeWithTextInput({ searchText }));
  };

  // useFocusEffect(() =>{
  //   dispatch(clearJokeState());
  // },[] );

  // useEffect(() => {
  //   if (joke) {
  //     Alert.alert('Random Joke', joke.value, [
  //       { text: 'OK', onPress: () => console.log('OK Pressed') },
  //     ]);
  //   }
  // }, [joke]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Query"
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button title="Search" style={styles.btnContainer} onPress={handleSearch} />
      <Text>{joke && joke.result.length > 0 ? joke.result.map(j => j.value).join('\n\n') : 'No jokes to display'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  btnContainer: {
    marginTop: 10,
  },
});