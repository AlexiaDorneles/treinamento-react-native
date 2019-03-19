import React from 'react'
import { View, Text } from 'react-native'

import styles from './profile-row.style'

export const ProfileRow = ({ prop, value }) => (
  <View style={styles.container}>
    <Text>{prop}</Text>
    <Text>{value}</Text>
  </View>
)
