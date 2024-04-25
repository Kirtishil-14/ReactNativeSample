import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screen/Login';
import Home from '../screen/Home';
import AddEmployee from '../screen/AddEmployee';
import Dashboard from '../screen/Dashboard';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: 'Home',
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen name="AddEmployee" component={AddEmployee} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
