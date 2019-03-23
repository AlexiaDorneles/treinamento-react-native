import React, { Component, Fragment } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { ChatHeader } from './chat-header/chat-header.section'
import { ChatInput } from './chat-input/chat-input.section'
import { ChatContent } from './chat-content/chat-content.section'

const picture = 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/0a/Vision_Forest.jpg/revision/latest?cb=20150808002434'

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
        <ChatHeader picture={picture} name="visionjarvis" />
        <KeyboardAvoidingView contentContainerStyle={{ flex: 1, padding: 10 }} style={{ flex: 1, padding: 10 }} keyboardVerticalOffset={100}>
          <ChatContent messages={this.state.messages} />
          <ChatInput onSend={this.onSendMessage} />
        </KeyboardAvoidingView>
      </Fragment>
    )
  }
}
