import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  const [emp, setEmp] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // getEmpData();
    });

    return unsubscribe;
  }, []);

  const getEmpData = async () => {
    try {
      const getData = await AsyncStorage.getItem('emp');
      let storeData = JSON.parse(getData);

      setEmp(storeData);
    } catch (error) {
      console.info(error);
    }
  };

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainer={{flex: 1}}
      style={{backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            margin: 12,
          }}>
          <Text style={{flex: 1}}>FirstName</Text>
          <Text style={{flex: 1}}>Lastname</Text>
          <Text style={{flex: 1}}>Age</Text>
          <Text style={{flex: 1}}>City</Text>
        </View>
        <View style={{backgroundColor: 'black', height: 2}} />
        {emp.map((e, i) => {
          return (
            <View
              key={i}
              style={{
                flexDirection: 'row',
                margin: 12,
              }}>
              <Text style={{flex: 1}}>{e.fname}</Text>
              <Text style={{flex: 1}}>{e.lname}</Text>
              <Text style={{flex: 1}}>{e.age}</Text>
              <Text style={{flex: 1}}>{e.city}</Text>
            </View>
          );
        })}
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddEmployee', {});
        }}>
        <Text
          style={{
            fontSize: 20,
            backgroundColor: '#977',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 12,
            margin: 12,
            padding: 12,
            textAlign: 'center',
            color: 'white',
          }}>
          Add Employee
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;
