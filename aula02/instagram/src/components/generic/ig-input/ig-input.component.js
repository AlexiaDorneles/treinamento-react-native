import React from 'react'
import { TextInput } from 'react-native'

export const IgInput = ({ placeholder, onChangeText, value }) => (
  <TextInput placeholder={placeholder} onChangeText={onChangeText} value={value} />
)
