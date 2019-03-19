import React from 'react'
import { View } from 'react-native'

const _getStyles = (color, width) => ({
  borderWidth: 2,
  borderColor: color,
  width,
})

export const IgLine = ({ color, width }) => (
  <View style={_getStyles(color, width)} />
)
