import React from 'react'
import { View, Text } from 'react-native'
import { Hero } from '../hero/hero'
import STYLES from './heroList.style'

const handleEmptyList = (list) => {
  return !list || !list.length ? <Text>Nenhum Herói na lista</Text> : null
}

const renderHeroes = (heroes) => {
  return !heroes.length ? null : heroes.map(h => <Hero key={h.name} hero={h} />)
}

const HeroList = ({ heroes }) => (
  <View style={{ width: '100%' }}>
    <Text style={STYLES.title}>Heroes </Text>
    {handleEmptyList(heroes)}
    {renderHeroes(heroes)}
  </View>
)

export { HeroList }
