import React,{ useEffect, useState,useFocusEffect }  from 'react';
import { fetchRandomJoke } from '../store/apis/JokesSlice';
import { useDispatch,useSelector } from 'react-redux';
import { View, Button, StyleSheet, Text ,ScrollView} from 'react-native';

export default function NeverEndingJokeListScreen({ navigation }) {
  const dispatch = useDispatch();
  const joke = useSelector((state) => state.joke.data);
  const [jokes, setJokes] = useState([]);

  const handlePress = () => {
    dispatch(fetchRandomJoke());
  };

  useEffect(() => {
    if (joke) {
      setJokes((oldJokes) => [...oldJokes, joke]);
    }
  }, [joke]);
  return (
    <View style={styles.container}>
      <Button title="Press for a Chuck Norris Joke" onPress={handlePress} />
      <ScrollView>
        {jokes.map((joke, index) => (
          <View key={index} style={styles.card}>
            <Text>{joke.value}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  btnContainer: {
    margin: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
  },
});