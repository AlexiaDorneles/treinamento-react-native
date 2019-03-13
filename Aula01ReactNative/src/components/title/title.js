import React, { PureComponent } from 'react'
import { View, Image, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import heroesImage from '../../assets/image/heroes.png'

import STYLES from './title.style'

export class Title extends PureComponent {
  render() {
    return (
      <View style={STYLES.container}>
        <Image style={STYLES.img} source={heroesImage} />
        <LinearGradient colors={['transparent', '#ff6666']} style={STYLES.background} />
        <View style={STYLES.background} />
        <Text style={STYLES.text}>Welcome to React, {this.props.name}!</Text>
      </View>
    )
  }
}
