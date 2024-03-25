import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddEmployee = ({navigation}) => {
  const [state, setState] = useState({
    fname: '',
    lname: '',
    age: '',
    city: '',
  });
  const [errMsg, setErrMsg] = useState('');

  const handleAddEmp = () => {
    if (state.fname === '') {
      setErrMsg('Please enter first name...');
    } else if (state.lname === '') {
      setErrMsg('Please enter last name...');
    } else if (state.age == '') {
      setErrMsg('Please enter age...');
    } else if (state.city === '') {
      setErrMsg('Please enter city...');
    } else {
      addEmployee();
    }
  };

  const addEmployee = async () => {
    try {
      const getData = await AsyncStorage.getItem('emp');
      if (getData != null) {
        let tp = [];
        tp = JSON.parse(getData);
        tp.push(state);

        await AsyncStorage.setItem('emp', JSON.stringify(tp));
      } else {
        let arr = [];
        arr.push(state);
        const setVal = JSON.stringify(arr);
        await AsyncStorage.setItem('emp', setVal);
      }

      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

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
          placeholder="firstName"
          value={state.fname}
          onChangeText={text => setState({...state, fname: text})}
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
          placeholder="lastName"
          value={state.lname}
          onChangeText={text => setState({...state, lname: text})}
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
          placeholder="Age"
          value={state.age}
          onChangeText={text => setState({...state, age: text})}
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
          placeholder="City"
          value={state.city}
          onChangeText={text => setState({...state, city: text})}
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
            handleAddEmp();
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
            Add Employee
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddEmployee;
