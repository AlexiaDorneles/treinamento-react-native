import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export const IgButton = ({ label, style, onPress }) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Text>{label}</Text>
  </TouchableOpacity>
)
