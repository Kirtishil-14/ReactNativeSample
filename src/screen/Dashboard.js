import {
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {apiCall} from '../API/apiCall';

const {width: screenWidth} = Dimensions.get('window');

const testData = [
  ['Pakistan', 23],
  ['Pakistan', 127],
  ['India', 3],
  ['India', 71],
  ['Australia', 31],
  ['India', 22],
  ['Pakistan', 81],
];

const Dashboard = () => {
  const [state, setState] = useState({
    test: true,
    server: false,
  });
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await apiCall(
      'https://assessments.reliscore.com/api/cric-scores/',
    );
    setServerData(result);
  };
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: 'white',
          padding: 24,
          borderWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text>Test Data </Text>
        <TouchableOpacity
          style={{
            height: 20,
            width: 20,
            borderWidth: 1,
            backgroundColor: state.test ? 'red' : 'white',
          }}
          onPress={() =>
            setState({...state, test: true, server: false})
          }></TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          padding: 24,
          borderWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text>Server Data </Text>
        <TouchableOpacity
          style={{
            height: 20,
            width: 20,
            borderWidth: 1,
            backgroundColor: state.server ? 'red' : 'white',
          }}
          onPress={() =>
            setState({...state, test: false, server: true})
          }></TouchableOpacity>
      </View>
      <View>
        {state.test &&
          testData.map(item => {
            return (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'white',
                  padding: 24,
                  //flexDirection: 'row',
                }}>
                <Text>The Country:</Text>
                <Text>{item[0]}</Text>
                <Text>The Average: {item[1]}</Text>
                <View
                  style={{
                    width: (screenWidth * item[1]) / 300,
                    height: 10,
                    backgroundColor: 'blue',
                  }}></View>
              </View>
            );
          })}
        {state.server &&
          serverData.map(item => {
            return (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'white',
                  padding: 24,
                  //flexDirection: 'row',
                }}>
                <Text>The Country:</Text>
                <Text>{item[0]}</Text>
                <Text>The Average: {item[1]}</Text>
                <View
                  style={{
                    width: (screenWidth * item[1]) / 300,
                    height: 10,
                    backgroundColor: 'blue',
                  }}></View>
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
};

export default Dashboard;
