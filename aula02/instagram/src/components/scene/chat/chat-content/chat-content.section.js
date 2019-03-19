import React, { Component } from 'react'
import { ScrollView } from 'react-native'

import styles from './chat-content.style'
import { ChatBaloon } from '../chat-baloon/chat-baloon.section'

export class ChatContent extends Component {
  renderMessages() {
    return this.props.messages.map((m, i) => <ChatBaloon key={i} text={m} />)
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {this.renderMessages()}
      </ScrollView>
    )
  }
}
