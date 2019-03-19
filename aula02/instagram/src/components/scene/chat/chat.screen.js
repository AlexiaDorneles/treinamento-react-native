import React, { Component, Fragment } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { ChatHeader } from './chat-header/chat-header.section'
import { ChatInput } from './chat-input/chat-input.section'
import { ChatContent } from './chat-content/chat-content.section'

export class Chat extends Component {
  state = { messages: [] }

  onSendMessage = (message) => {
    const { messages } = this.state
    messages.push(message)
    this.setState({ messages })
  }

  render() {
    return (
      <Fragment>
        <ChatHeader picture="https://avatars2.githubusercontent.com/u/19597184?s=400&v=4" name="alexiadorneles" />
        <KeyboardAvoidingView contentContainerStyle={{ flex: 1, padding: 10 }} style={{ flex: 1, padding: 10 }}>
          <ChatContent messages={this.state.messages} />
          <ChatInput onSend={this.onSendMessage} />
        </KeyboardAvoidingView>
      </Fragment>
    )
  }
}
