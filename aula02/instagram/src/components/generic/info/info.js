import React from 'react'
import { View, Text } from 'react-native'

export const Info = ({ title, subtitle, style }) => (
  <View style={{ justifyContent: 'center', ...style, marginLeft: 10 }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'lato' }}>{title} </Text>
    {!!subtitle ? <Text style={{ fontFamily: 'lato' }}>{subtitle} </Text> : null}
  </View >
)
