import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  icons: {
    width: 20,
    height: 20,
  },
  centerIcon: {
    width: 100,
    maxHeight: 30,
  },
})

export const Header = ({ left, center, right }) => (
  <View style={styles.container}>
    <Image source={left} style={styles.icons} />
    <Image source={center} style={styles.centerIcon} />
    <Image source={right} style={styles.icons} />
  </View>
)
