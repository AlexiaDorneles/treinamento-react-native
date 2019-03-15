import React from 'react'
import { View, Text } from 'react-native'

export const Info = ({ title, subtitle, style }) => (
  <View style={{ justifyContent: 'center', ...style, marginLeft: 10 }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title} </Text>
    {!!subtitle ? <Text>{subtitle} </Text> : null}
  </View>
)
