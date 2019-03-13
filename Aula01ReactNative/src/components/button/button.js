import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import STYLES from './button.style'

export const Button = ({ onClick, label }) => (
  <View>
    <TouchableOpacity
      onPress={onClick}
      style={STYLES.button}
    >
      <Text style={STYLES.text}>{label}</Text>
    </TouchableOpacity>
  </View>
)
