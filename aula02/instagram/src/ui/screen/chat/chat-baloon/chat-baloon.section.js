import React from 'react'
import { Text, View } from 'react-native'

import styles from './chat-baloon.style'

export const ChatBaloon = ({ text }) => (
  <View style={styles.container}>
    <Text> {text} </Text>
  </View>
)
