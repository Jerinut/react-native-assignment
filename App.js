import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/views/HomeScreen';
import TextInputScreen from './src/views/TextInputScreen'
import NeverEndingJokeListScreen from './src/views/NeverEndingJokeListScreen';
import {store} from './src/store/index'
import { Provider } from 'react-redux';
const Stack = createNativeStackNavigator()
export default function App(){
// Navigation stacks and provider for the redux store is present 
    return(
      <Provider store={store}> 
     <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
       <Stack.Screen name="Home" component ={HomeScreen}></Stack.Screen>
       <Stack.Screen name="TextInput" component={TextInputScreen} />
       <Stack.Screen name="NeverEndingJokeList" component={NeverEndingJokeListScreen} />
      </Stack.Navigator>
     </NavigationContainer>
     </Provider>
    );


}