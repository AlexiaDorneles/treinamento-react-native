import React from 'react'
import { TextInput } from 'react-native'

import styles from './ig-input.style'

export const IgInput = ({ placeholder, onChangeText, value, style }) => (
  <TextInput
    placeholder={placeholder}
    onChangeText={onChangeText}
    value={value}
    style={[styles.input, style]}
    placeholderTextColor={styles.placeholder.color}
  />
)
