import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons'

import Home from './src/pages/Home';
import Musicas from './src/pages/Musicas';

export default function App(){
  const Tab = createMaterialBottomTabNavigator();

  return(
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="home"
      activeColor="white"
      barStyle={{ backgroundColor: '#423968' }} >
        <Tab.Screen 
        name="home" 
        component={Home} 
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={18} color={color} />
          ),
        }}
        />
        <Tab.Screen 
        name="musicas" 
        component={Musicas} 
        options={{
          tabBarLabel: 'Músicas',
          tabBarIcon: ({ color }) => (
            <Feather name="music" size={18} color={color} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}