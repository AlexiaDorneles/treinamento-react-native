import React from 'react'
import { View, Image, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import STYLES from './hero.style'

const _getSrc = (img) => {
  return { uri: img }
}
export const Hero = ({ hero }) => (
  <View style={STYLES.card}>
    <LinearGradient colors={['transparent', 'transparent', 'transparent', '#000000']} style={STYLES.cardShadow} />
    <Image style={STYLES.image} source={_getSrc(hero.image)} />
    <Text style={STYLES.name}>{hero.name}</Text>
  </View>
)
