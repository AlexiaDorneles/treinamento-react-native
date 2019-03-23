import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import styles from './chat-input.style'
import { IgIcon } from '@component'

const DARK_BLUE = '#347cef'
const BLUE = '#7eaefc'
const START = { x: 0, y: 1 }
const END = { x: 1, y: 0 }

export class ChatInput extends Component {
  state = { value: '' }

  onChangeText = (text) => {
    this.setState({ value: text })
  }

  onDonePress = () => {
    if (!this.state.value) return
    this.props.onSend(this.state.value)
    this.setState({ value: '' })
  }

  render() {
    return (
      <View style={styles.container} behavior="padding" enabled>
        <LinearGradient start={START} end={END} colors={[BLUE, DARK_BLUE]} style={styles.cameraContainer}>
          <IgIcon name="photo-camera" style={styles.camera} />
        </LinearGradient>
        <TextInput
          value={this.state.value}
          style={styles.input}
          placeholder="Mensagem..."
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onDonePress}
          blurOnSubmit={false}
        />
        <IgIcon name="user" style={styles.icon} />
        <IgIcon name="user" style={styles.icon} />
        <IgIcon name="user" style={styles.icon} />
      </View>
    )
  }
}
