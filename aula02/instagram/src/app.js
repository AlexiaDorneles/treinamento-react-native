/* eslint-disable no-constant-condition */
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { Navigator } from '@ui/navigator'

import { Direct, Chat, Login, Profile, Feed } from '@ui/screen'

export default class App extends Component {
  render() {
    return (
      <Navigator />
      // <View style={styles.container}>
      //   {false ? <Direct /> : null}
      //   {false ? <Chat /> : null}
      //   {false ? <Login /> : null}
      //   {true ? <Profile /> : null}
      //   {false ? <Feed /> : null}
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    fontFamily: 'Lato-Bold',
  },
})
