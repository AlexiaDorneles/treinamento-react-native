import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { IgIcon } from '../igIcon/ig-icon.component'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 1,
    backgroundColor: '#FAFAFA',
  },
  corners: {
    fontSize: 14,
    color: '#262626',
  },
  center: {
    width: 100,
    maxHeight: 30,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#262626',
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
