import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import CardScreen from './screens/CardScreen';
import LoadingScreen from './screens/LoadingScreen';


const Stack=createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Menu' component={MenuScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Card' component={CardScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Loading' component={LoadingScreen}  options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default StackNavigator;

