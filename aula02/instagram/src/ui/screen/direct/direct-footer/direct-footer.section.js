import React from 'react'
import { View, Text } from 'react-native'
import { IgIcon } from '@component'

import styles from './direct-footer.style'

export const DirectFooter = () => (
  <View style={styles.containter} >
    <IgIcon name="photo-camera" style={styles.camera} />
    <Text style={styles.text}> Camera </Text>
  </View>
)
