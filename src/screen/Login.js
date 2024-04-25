import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {apiCall} from '../API/apiCall';

const API = 'https://fakestoreapi.com/users';

const Login = ({navigation}) => {
  const [state, setState] = useState({
    username: 'john@gmail.com',
    password: 'm38rmF$',
  });
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    //apiCall(API);
  }, []);

  const handleLogin = () => {
    if (state.username === '') {
      setErrMsg('Please enter username...');
    } else if (state.password === '') {
      setErrMsg('Please enter password...');
    } else {
      postJSON(state);
    }
  };

  async function postJSON(data) {
    try {
      const result = await apiCall(API, 'POST', data);

      console.info('here', result);
      if (result.id) {
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
          placeholder="username"
          value={state.username}
          onChangeText={text => setState({...state, username: text})}
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
