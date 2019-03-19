import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './ig-button.style'

export const IgButton = ({ label, style, onPress }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
)
