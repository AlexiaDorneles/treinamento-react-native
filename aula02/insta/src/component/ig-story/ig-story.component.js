import React from 'react'
import { View, Text } from 'react-native'
import { IgProfilePicture } from '../ig-profile-picture/ig-profile-picture.component'
import LinearGradient from 'react-native-linear-gradient'

import styles from './ig-story.style'

const LINEAR_START = { x: 1, y: 0 }
const LINEAR_END = { x: 0, y: 1 }
const LINEAR_COLORS = ['#A21391', '#CD106A', '#D82851', '#E95634', '#F8A64D']

const _getStyles = (isMe) => {
  return isMe ? { ...styles.imageStyle, ...styles.me } : styles.imageStyle
}

const _renderContent = (picture, isMe) => {
  return isMe ? _renderPicture(picture, isMe) : _renderGradient(picture, isMe)
}

const _renderPicture = (picture, isMe) => (
  <IgProfilePicture picture={picture} imageStyle={_getStyles(isMe)} style={styles.style} />
)

const _renderGradient = (picture, isMe) => (
  <LinearGradient
    start={LINEAR_START}
    end={LINEAR_END}
    colors={LINEAR_COLORS}
    style={styles.imageGradient}
  >
    {_renderPicture(picture, isMe)}
  </LinearGradient>
)

export const IgStory = ({ picture, name, isMe = false }) => (
  <View style={styles.container}>
    {_renderContent(picture, isMe)}
    <Text style={isMe ? { ...styles.text, ...styles.me} : styles.text}>{name}</Text>
  </View >
)
