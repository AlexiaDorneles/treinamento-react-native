import React from 'react'
import { Image, View } from 'react-native'

import styles from './ig-profile-picture.style'

const renderOnline = () => (
  <View style={styles.onlineContainer}>
    <View style={styles.onlineBackground}></View>
    <View style={styles.online}></View>
  </View>
)

export const IgProfilePicture = ({ picture, isOnline, style, imageStyle }) => (
  <View style={{ ...styles.container, ...style }}>
    <Image style={{ ...styles.img, ...imageStyle }} source={{ uri: picture }} />
    {isOnline ? renderOnline() : null}
  </View>
)
