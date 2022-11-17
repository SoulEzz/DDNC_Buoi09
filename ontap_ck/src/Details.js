import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import Data from '../Data';

import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Order from './Order';

export default function Details({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Order')}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold' }}>Details</Text>
        <AntDesign name="hearto" size={24} color="black" />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image
          style={{ width: 280, height: 160, borderRadius: 10 }}
          source={require('../assets/cappu_choco.jpg')}
        />
      </View>
      <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 25 }}>
        Cappuccino
      </Text>
      <Text style={{ marginLeft: 25, color: '#cccccc' }}>with Chocolate</Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row', marginLeft: 25 }}>
          <Entypo name="star" size={24} color="yellow" />
          <Text style={{ marginLeft: 5, marginTop: 5 }}>4.8 </Text>
          <Text style={{ color: '#cccccc', marginLeft: 5, marginTop: 5 }}>
            (230)
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}></View>
      </View>
      <Text style={{ fontWeight: 'bold', marginTop: 10, marginLeft: 25 }}>
        Description
      </Text>
      <View style={{ margin: 25 }}>
        <Text>
          A cappuchino is an approximetely 150ml (5oz) bevegare, with 25 ml of
          espresso coffee and 85 ml of fresh milk the fo..{' '}
          <Text style={{ color: '#c67c4e', fontWeight: 'bold' }}>
            {' '}
            Read more
          </Text>
        </Text>
      </View>
      <Text style={{ fontWeight: 'bold', marginLeft: 25 }}> Size</Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginLeft: 25,
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={{
            border: '1px solid #cccccc',
            width: 80,
            alignItems: 'center  ',
            padding: 10,
            borderRadius: 10,
          }}>
          <Text>S</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            border: '1px solid #cccccc',
            width: 80,
            alignItems: 'center  ',
            padding: 10,
            borderRadius: 10,
          }}>
          {' '}
          <Text>M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            border: '1px solid #cccccc',
            width: 80,
            alignItems: 'center  ',
            padding: 10,
            borderRadius: 10,
          }}>
          <Text>L</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 20 }}>
        <View style={{ flexDirection: 'column' }}>
          <Text>Price</Text>
          <Text style={{ color: '#c67c4e', fontWeight: 'bold' }}>$ 4.53</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#c67c4e',
            padding: 15,
            marginLeft: 60,
            width: '60%',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <Text style={{ color: 'white' }}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '120%',
  },
});
