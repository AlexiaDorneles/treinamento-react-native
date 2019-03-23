import React from 'react'
import { View, Text } from 'react-native'
import { IgProfilePicture, IgIcon } from '@component'

import styles from './chat-header.style'

export const ChatHeader = ({ picture, name }) => (
  <View style={styles.container}>
    <IgIcon name="left-arrow" style={styles.icon} />
    <IgProfilePicture picture={picture} style={styles.imageContainer} imageStyle={styles.image} />
    <Text style={styles.name}> {name}</Text>
    <View style={styles.iconsContainer}>
      <IgIcon name="home" style={styles.icon} />
      <IgIcon name="photo-camera" style={styles.icon} />
    </View>
  </View>
)
