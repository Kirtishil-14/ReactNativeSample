import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';

const Demo = () => {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const tabs = [
    {name: 'Driver', icon: require('./index-tatd_files/driver.png')},
    {name: 'RO', icon: require('./index-tatd_files/ro.png')},
    {name: 'Taxi', icon: require('./index-tatd_files/taxi.png')},
    {name: 'Courier', icon: require('./index-tatd_files/courier.png')},
    {name: 'Maid', icon: require('./index-tatd_files/maid.png')},
    {name: 'AC', icon: require('./index-tatd_files/ac.png')},
    {name: 'Plumber', icon: require('./index-tatd_files/plumber.png')},
    {name: 'Electrician', icon: require('./index-tatd_files/electrician.png')},
    {name: 'Carpenter', icon: require('./index-tatd_files/carpainter.png')},
    {name: 'Painter', icon: require('./index-tatd_files/painter.png')},
    {name: 'Cook', icon: require('./index-tatd_files/cook.png')},
  ];

  const renderItem = ({item}) => (
    <View
      style={{
        alignItems: 'center',
        width: '33.33%',
        padding: 20,
      }}>
      <Image
        source={item.icon}
        style={{height: 30, width: 30}}
        resizeMode="contain"
      />
      <Text style={{textAlign: 'center'}}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{height: 120, width: '100%'}}>
        <View style={{marginLeft: 18}}>
          <Image source={require('./index-tatd_files/interview/logo.png')} />
          <Text style={{color: 'white'}}>Family ke liye driver</Text>
        </View>
        <View></View>
      </View>
      <ScrollView
        contentContainerStyle={{}}
        style={{flex: 1, paddingBottom: 20}}>
        <View style={{backgroundColor: 'white', marginHorizontal: 18}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '600',
              marginVertical: 12,
            }}>
            I Require ?
          </Text>
          <View
            style={{height: 1, backgroundColor: 'gray', marginHorizontal: 12}}
          />
          <FlatList
            data={tabs}
            renderItem={renderItem}
            keyExtractor={item => item.name}
            numColumns={3}
            contentContainerStyle={{
              padding: 12,
            }}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'white',
            marginHorizontal: 18,
            marginVertical: 24,
            padding: 18,
          }}>
          <View style={{backgroundColor: 'white', borderRadius: 6}}>
            <View>
              <Text
                style={{
                  fontSize: 70,
                  color: 'orange',
                  marginLeft: 12,
                  letterSpacing: 1,
                  fontWeight: '900',
                }}>
                5%
              </Text>
              <View
                style={{
                  backgroundColor: 'orange',
                  padding: 12,
                  width: 120,
                  marginHorizontal: 12,
                  borderRadius: 8,
                }}>
                <Text
                  style={{
                    color: 'white',
                  }}>
                  Refer & Earn
                </Text>
              </View>
            </View>
            <View></View>
          </View>
        </View>
        {data.map(item => {
          return (
            <View
              style={{
                height: 200,
                backgroundColor: item % 2 == 0 ? 'red' : 'green',
              }}>
              <Text>ki</Text>
            </View>
          );
        })}
      </ScrollView>

      <View
        style={{
          padding: 20,
          height: 100,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'white',
        }}>
        <View>
          <Text>Refer</Text>
        </View>
        <View>
          <Text>Reviews</Text>
        </View>
        <View>
          <Text>Track</Text>
        </View>
      </View>
    </View>
  );
};

export default Demo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16588e',
    width: '100%',
  },
});
