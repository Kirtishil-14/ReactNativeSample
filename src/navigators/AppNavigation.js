import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screen/Login';
import Home from '../screen/Home';
import AddEmployee from '../screen/AddEmployee';
import Dashboard from '../screen/Dashboard';

import {View, Text, FlatList, StyleSheet, Switch, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const AppNavigation = () => {
  const [role, setRole] = useState('Customer');
  const toggleSwitch = () =>
    setRole(previousRole =>
      previousRole === 'Customer' ? 'Partner' : 'Customer',
    );

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
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
      </Stack.Navigator> */}

      <View style={styles.topBar}>
        <Text>Kirtishil</Text>
        <View style={styles.switchContainer}>
          <Text>Customer</Text>
          <Switch onValueChange={toggleSwitch} value={role === 'Partner'} />
          <Text>Partner</Text>
        </View>
      </View>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Dashboard">
          {() => <Dashboard />}
        </BottomTab.Screen>
        <BottomTab.Screen name="Home" component={Home} />
        <BottomTab.Screen name="AddEmployee" component={AddEmployee} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  referContainer: {
    marginTop: 20,
  },
  referText: {
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppNavigation;
