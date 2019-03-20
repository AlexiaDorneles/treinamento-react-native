import React from 'react'
import { View, Text } from 'react-native'
import { IgIcon } from '../ig-icon/ig-icon.component'

import styles from './ig-header.style'

const _getStyle = (position, text = false) => position === 1 ?
  (text ? styles.center : { ...styles.center, fontSize: 25 }) : styles.corners

const _resolveHeader = (item, position) => {
  if (item.name) return <IgIcon name={item.name} style={_getStyle(position)} />
  return <Text style={_getStyle(position, true)}>{item}</Text>
}

export const IgHeader = ({ left, center, right }) => (
  <View style={styles.container}>
    {_resolveHeader(left, 0)}
    {_resolveHeader(center, 1)}
    {_resolveHeader(right, 2)}
  </View>
)
