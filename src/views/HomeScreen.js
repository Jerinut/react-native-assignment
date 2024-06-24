
import React,{useEffect} from 'react';
import { View, Button, StyleSheet, Text,Alert } from 'react-native';
import { fetchRandomJoke } from '../store/apis/JokesSlice';
import { useDispatch,useSelector } from 'react-redux';

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch()
  const joke = useSelector((state) => state.joke.data);
  const isLoading = useSelector((state) => state.joke.isLoading);
  console.log(joke)

  const onRandomJokeClicked = () =>{
    try{
      dispatch(fetchRandomJoke());
    }catch(err){
      console.error('Failed to fetch joke',err);
    }
  }

  useEffect(() => {
    if (joke) {
      Alert.alert('Random Joke', joke.value, [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
  }, [joke]);

  return (
    <View style={styles.container}>
      <Button title="Random Joke" style ={styles.btnContainer} onPress={onRandomJokeClicked} />
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