import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from './screen/Home';
import Detail from './screen/Detail';

const Stack = createStackNavigator();
const App = ({ params }: any) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name='Detail' component={Detail} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <App />
  )
};