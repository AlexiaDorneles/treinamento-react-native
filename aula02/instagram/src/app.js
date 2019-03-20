/* eslint-disable no-constant-condition */
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { Direct, Chat, Login, Profile, Feed } from './components/scene'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {false ? <Direct /> : null}
        {false ? <Chat /> : null}
        {true ? <Login /> : null}
        {false ? <Profile /> : null}
        {false ? <Feed /> : null}
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    fontFamily: 'Lato-Bold',
  },
})
