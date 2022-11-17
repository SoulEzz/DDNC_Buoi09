import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Details from './Details';
import Home from './Home';

export default function Order({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
           <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', marginTop: 2 }}>Order</Text>
        <Text></Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#f2f2f2',
          padding: 5,
          width: '90%',
          marginLeft: 20,
          marginTop: 15,
          borderRadius: 10,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#c67c4e',
            width: '45%',
            padding: 10,
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text>Deliver</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            // backgroundColor: '#c67c4e',
            width: '45%',
            padding: 10,
            alignItems: 'center',
            borderRadius: 10,
            marginLeft: 20,
          }}>
          <Text>Pick up</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontWeight: 'bold', marginLeft: 15, marginTop: 20 }}>
        {' '}
        Delivery Address{' '}
      </Text>
      <View style={{ marginLeft: 15, marginTop: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Jl. Kpg Sutoyo</Text>
        <Text style={{ color: '#b4b4b4' }}>
          {' '}
          Kpg Sutoyo No. 620, Bilzen, Tanjungbalai{' '}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginLeft: 10,
          justifyContent: 'space-around',
          width: '60%',
        }}>
        <Text
          style={{ border: '1px solid #cccccc', padding: 5, borderRadius: 15 }}>
          Edit Address
        </Text>
        <Text
          style={{ border: '1px solid #cccccc', padding: 5, borderRadius: 15 }}>
          {' '}
          Add Note
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          borderTop: '1px solid #cccccc',
          padding: 10,
          borderBottom: '1px solid #cccccc',
        }}>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 10 }}
            source={require('../assets/cappu_choco.jpg')}
          />
          <View
            style={{ flexDirection: 'column', marginTop: 10, marginLeft: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Cappuccino</Text>
            <Text>with Chocolate</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            width: '40%',
            padding: 10,
            marginTop: 5,
            marginLeft: 10,
          }}>
          <AntDesign name="minuscircleo" size={24} color="black" />
          <Text>1</Text>
          <AntDesign name="pluscircleo" size={24} color="black" />
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            border: '1px solid #cccccc',
            padding: 10,
            borderRadius: 10,
            width: '90%',
          }}>
          1 Discount is applied{' '}
          <Text style={{ fontSize: 20, marginLeft: 100 }}> > </Text>{' '}
        </Text>
      </View>
      <View style={{ flexDirection: 'column', margin: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Payment Summary</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>Price</Text>
          <Text style={{ fontWeight: 'bold' }}>$ 4.53</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>Delivery Fee</Text>
          <Text style={{ fontWeight: 'bold' }}>$ 1.0</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text>Total Payment</Text>
          <Text style={{ fontWeight: 'bold' }}>$ 5.53</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginLeft: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              padding: 3,
              backgroundColor: '#c67c4e',
              borderRadius: 10,
              color: 'white',
            }}>
            Cash
          </Text>
          <Text style={{ color: '#cccccc', marginLeft: 5, marginTop: 3 }}>
            $ 5.53
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details')}
          style={{
            backgroundColor: '#c67c4e',
            margin: 20,
            padding: 15,
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{ fontWeight: 'bold', color: 'white' }}>Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 500,
    backgroundColor: 'white',
    borderRadius: '15px',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
