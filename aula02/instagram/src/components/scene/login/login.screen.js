import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Text, View } from 'react-native'

import styles from './login.style'
import { IgInput, IgButton, IgLine, IgIcon } from '../../generic'

const LINEAR_START = { x: 1, y: 0 }
const LINEAR_END = { x: 0, y: 1 }
const LINEAR_COLORS = ['#A21391', '#CD106A', '#D82851', '#E95634', '#F8A64D']

export class Login extends Component {
  render() {
    return (
      <LinearGradient
        start={LINEAR_START}
        end={LINEAR_END}
        colors={LINEAR_COLORS}
        style={styles.container}
      >
        <Text>Sign in and use more features</Text>
        <IgInput placeholder="Email or username" />
        <IgInput placeholder="Password" />
        <IgButton />
        <Text style={styles.small}>Forgot your login details? </Text>
        <Text style={[styles.small, styles.underlined]}>Get help signing in.</Text>

        <View style={styles.lineContainer}>
          <IgLine color="white" width="40" />
          <Text>OR</Text>
          <IgLine color="white" width="40" />
        </View>

        <View style={styles.facebookContainer}>
          <IgIcon name="facebook" />
          <Text>Continue with facebook</Text>
        </View>

        <View style={styles.noAccount}>
          <Text>{'Don\'t have an account?'}</Text>
          <Text style={[styles.small, styles.underlined]}>Sign in</Text>
        </View>
      </LinearGradient>
    )
  }
}
