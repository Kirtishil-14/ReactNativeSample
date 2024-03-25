import React, {useState, useEffect} from 'react';

import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';

const Login = ({navigation}) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [errMsg, setErrMsg] = useState('');

  const handleLogin = () => {
    if (state.email === '') {
      setErrMsg('Please enter email...');
    } else if (state.password === '') {
      setErrMsg('Please enter password...');
    } else {
      postJSON(state);
    }
  };

  async function postJSON(data) {
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      //set token in async storage
      if (result.token) {
        Alert.alert('Login Successfully');
        navigation.navigate('Home');
      }
    } catch (error) {
      Alert.alert('API error');
      console.error('Error:', error);
    }
  }
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          marginHorizontal: 24,
          borderRadius: 12,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: 'red',
            marginBottom: 12,
            marginHorizontal: 12,
          }}>
          {errMsg}
        </Text>
        <TextInput
          placeholder="email"
          value={state.email}
          onChangeText={text => setState({...state, email: text})}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 12,
            margin: 12,
            padding: 12,
            fontSize: 20,
          }}
        />
        <TextInput
          placeholder="password"
          value={state.password}
          onChangeText={text => setState({...state, password: text})}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 12,
            margin: 12,
            padding: 12,
            fontSize: 20,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            handleLogin();
          }}>
          <Text
            style={{
              fontSize: 20,
              backgroundColor: 'pink',
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 12,
              margin: 12,
              padding: 12,
              textAlign: 'center',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
