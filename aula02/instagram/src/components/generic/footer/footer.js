import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

import camera from '../../../img/camera.png'

const styles = StyleSheet.create({
  camera: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  containter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 40,
  },
})

export const Footer = () => (
  <View style={styles.containter} >
    <Image source={camera} style={styles.camera} />
    <Text> Camera </Text>
  </View>
)
