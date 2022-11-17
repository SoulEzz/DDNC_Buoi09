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
import Constants from 'expo-constants';

import Order from './Order';

export default function Onboarding({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{ width: '100%', height: '100%', alignItems: 'center' }}
        source={require('../assets/background.jpg')}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Order')}
          style={styles.btn_get}>
          <Text
            style={{ marginTop: '10px', color: 'white', fontWeight: 'bold' }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 600,
    backgroundColor: 'black',
  },
  btn_get: {
    backgroundColor: '#d2691e',
    height: '40px',
    alignItems: 'center',
    width: '90%',
    // marginLeft: '45px',
    borderRadius: '10px',
    position: 'relative',
    marginTop: 550,
  },
});
