import React from 'react'
import { View, Text } from 'react-native'

import styles from './profile-row.style'

export const ProfileRow = ({ prop, value, isShowBorder = true }) => (
  <View style={styles.container}>
    <Text style={styles.prop}>{prop}</Text>
    <Text style={[styles.value, isShowBorder ? styles.borderBottom : null]}>{value}</Text>
  </View>
)
