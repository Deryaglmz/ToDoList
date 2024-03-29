import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

import Anasayfa from './screen/Anasayfa';
import TodoList from './screen/TodoList';

import { createStackNavigator } from '@react-navigation/stack';

export default function App() { 
  const Stack = createStackNavigator();
    return ( 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Anasayfa' component={Anasayfa} />
          <Stack.Screen name='TodoList' component={TodoList} />
        </Stack.Navigator>
      </NavigationContainer>
    ); 
  } 