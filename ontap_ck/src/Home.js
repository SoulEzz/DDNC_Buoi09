import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';

import Data from '../Data';

import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Screen1({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 0.3, backgroundColor: 'black' }}></View>
      <View style={styles.wrapper}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View style={{ flexDirection: 'column', margin: 10 }}>
            <Text style={{ color: '#cccccc' }}>Location</Text>
            <Text style={{ color: 'white' }}>Bilzen, Tanjungbalai ∨ </Text>
          </View>
          <View>
            <Image
              style={{ width: 50, height: 50, borderRadius: 10, margin: 10 }}
              source={require('../assets/avatar.jpg')}
            />
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View
            style={{
              backgroundColor: '#cccccc',
              width: '90%',
              height: 50,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              marginTop: 10,
            }}>
            <Feather name="search" size={24} color="black" />
            <TextInput
              placeholder="Search coffee"
              style={{ width: '70%', height: 30 }}
            />
            <Entypo
              name="sound-mix"
              size={25}
              color="white"
              style={{
                backgroundColor: '#c67c4e',
                borderRadius: 10,
                width: 35,
                height: 35,
                paddingLeft: 5,
                paddingTop: 5,
              }}
            />
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{ width: 280, height: 100, marginTop: 20, borderRadius: 10 }}
            source={require('../assets/home_pic.jpg')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 20,
            marginLeft: 10,
          }}>
          <Text
            style={{
              backgroundColor: '#c67c4e',
              padding: 5,
              borderRadius: 10,
              color: 'white',
            }}>
            Cappuccino
          </Text>
          <Text style={{}}>Machiato</Text>
          <Text>Latte</Text>
          <Text>Americano</Text>
        </View>
        <View style={{}}>
          <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            data={Data}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Order')} style={{ margin: 10 }}>
                <ImageBackground
                  style={{
                    width: 100,
                    height: 100,
                    margin: 10,
                    flexDirection: 'row',
                  }}
                  source={{ uri: item.url }}>
                  <Entypo name="star" size={15} color="yellow" />
                  <Text style={{ fontWeight: 'bold' }}>{item.star}</Text>
                </ImageBackground>
                <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>
                  Cappuchino
                </Text>
                <Text style={{ marginLeft: 10 }}>with {item.name}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    width: 120,
                  }}>
                  <Text>{item.price}</Text>
                  <AntDesign
                    name="plussquare"
                    size={24}
                    color="#c67c4e"
                    style={{ borderRadius: 20 }}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 600,
    backgroundColor: 'white',
    borderRadius: '15px',
  },
  wrapper: {
    position: 'absolute',
    width: '100%',
    // alignItems: 'center',
  },
});
