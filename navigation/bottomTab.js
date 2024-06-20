import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AddProb from '../screens/addProb';
import Home from '../screens/home';
const Tab = createBottomTabNavigator();

export default class BottomTab extends React.Component {
  render() {
    return (
      <Tab.Navigator
      initialRouteName='AddProb'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color,size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Add') {
               iconName = focused ? 'add-circle' : 'add-circle-outline';
            }
            return <Ionicons name={iconName} color={color} size={size} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'gray',

          tabStyle: {
            backgroundColor: 'black',
            margin: 5,
            borderRadius: 10,
            borderWidth: 2,
            
          },
        }}>
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="Add" component={AddProb} options={{ headerShown: false }}/>
      </Tab.Navigator>
    );
  }
}
