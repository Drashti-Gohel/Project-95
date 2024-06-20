import * as React from 'react';
import { View } from 'react-native';
import Profile from '../screens/Profile';
import BottomTab from './bottomTab';
import Logout from '../screens/logout';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
export default class Draw extends React.Component {

 
  render() {
    return (
      <Drawer.Navigator useLegacyImplementation initialRouteName="Profile">
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{ drawerLabel: 'Profile' }}
        />
        <Drawer.Screen
          name="Home"
          component={BottomTab}
          options={{ drawerLabel: 'Home' }}
        />
        <Drawer.Screen
          name="Logout"
          component={Logout}
          options={{ drawerLabel: 'Logout' }}
        />

      </Drawer.Navigator>
    );
  }
}
