import React from 'react'
import { View, Text } from 'react-native'

import styles from './ig-info.style'

export const IgInfo = ({ title, subtitle, style }) => (
  <View style={[styles.container, style]}>
    <Text style={styles.text}>{title} </Text>
    {!!subtitle ? <Text>{subtitle} </Text> : null}
  </View >
)
