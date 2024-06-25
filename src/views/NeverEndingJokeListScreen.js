import React,{ useEffect, useState}  from 'react';
import { fetchRandomJoke } from '../store/apis/JokesSlice';
import { useDispatch,useSelector } from 'react-redux';
import { View, Button, StyleSheet, Text ,ScrollView} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

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

  useFocusEffect(
    React.useCallback(() => {
      // This function runs when the screen comes into focus
      return () => {
        // This function runs when the screen goes out of focus
        setJokes([]);
      };
    }, [])
  );

  return (
    <View style={styles.container}>
  <View style={styles.btnContainer}>
    <Button title="Press for a Chuck Norris Joke" onPress={handlePress} />
  </View>
  <ScrollView>
    {jokes.map((eachJoke, index) => (
      <View key={index} style={styles.card}>
        <Text>{eachJoke.value}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
  },
});