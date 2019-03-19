import React, { Component } from 'react'
import { ScrollView } from 'react-native'

import styles from './chat-content.style'
import { ChatBaloon } from '../chat-baloon/chat-baloon.section'
// let scrollView

export class ChatContent extends Component {
  renderMessages() {
    return this.props.messages.map((m, i) => <ChatBaloon key={i} text={m} />)
  }

  // onContentSizeChange = (_, contentHeight) => {
  //   scrollView = contentHeight
  // }

  componentDidUpdate() {
    if (this.scrollView) this.scrollView.scrollToEnd()
  }

  render() {
    return (
      <ScrollView
        ref={ref => this.scrollView = ref}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        // onContentSizeChange={this.onContentSizeChange}
      >
        {this.renderMessages()}
      </ScrollView>
    )
  }
}
