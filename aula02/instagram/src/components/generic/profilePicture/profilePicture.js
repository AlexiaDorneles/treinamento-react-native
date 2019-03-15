import React from 'react'
import { Image, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
  },
  img: {
    width: 65,
    height: 65,
    borderRadius: 50,
    margin: 10,
  },
  onlineContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 8,
    right: 10,
  },
  online: {
    width: 15,
    height: 15,
    backgroundColor: '#3ced07',
    borderRadius: 50,
    position: 'absolute',
  },
  onlineBackground: {
    backgroundColor: 'white',
    width: 22,
    height: 22,
    borderRadius: 25,
  },
})

const renderOnline = () => (
  <View style={styles.onlineContainer}>
    <View style={styles.onlineBackground}></View>
    <View style={styles.online}></View>
  </View>
)

export const ProfilePicture = ({ picture, isOnline, style }) => (
  <View style={{ ...styles.container, ...style }}>
    <Image style={styles.img} source={{ uri: picture }} />
    {isOnline ? renderOnline() : null}
  </View>
)
