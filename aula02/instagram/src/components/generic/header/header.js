import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { IgIcon } from '../igIcon/ig-icon.component'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  corners: {
    width: 20,
    height: 20,
  },
  center: {
    width: 100,
    maxHeight: 30,
  },
})

const _getStyle = (position) => position === 1 ? styles.center : styles.corners

const _resolveHeader = (item, position) => {
  if (item.name) return <IgIcon name={item.name} style={_getStyle(position)} />
  return <Text style={_getStyle(position)}>{item}</Text>
}

export const Header = ({ left, center, right }) => (
  <View style={styles.container}>
    {_resolveHeader(left, 0)}
    {_resolveHeader(center, 1)}
    {_resolveHeader(right, 2)}
  </View>
)
