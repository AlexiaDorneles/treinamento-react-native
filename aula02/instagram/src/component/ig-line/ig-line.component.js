import React from 'react'
import { View } from 'react-native'

const _getWidth = (width) => {
  if (width && typeof width === 'string' && width.includes('%')) return width
  return width && parseFloat(width)
}


const _getStyles = (color, width) => ({
  borderWidth: 1,
  borderColor: color,
  width: _getWidth(width),
})

export const IgLine = ({ color, width }) => (
  <View style={_getStyles(color, width)} />
)
