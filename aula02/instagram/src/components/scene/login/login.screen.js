import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Text, View, KeyboardAvoidingView } from 'react-native'

import styles from './login.style'
import { IgInput, IgButton, IgLine, IgIcon, IgLogo } from '../../generic'

const LINEAR_START = { x: 1, y: 0 }
const LINEAR_END = { x: 0, y: 1 }
const LINEAR_COLORS = ['#A21391', '#CD106A', '#D82851', '#E95634', '#F8A64D']

export class Login extends Component {

  renderText(text, ...extraStyles) {
    return <Text style={[styles.text, ...extraStyles]}>{text}</Text>
  }

  render() {
    return (
      <KeyboardAvoidingView contentContainerStyle={{ flex: 1 }} style={{ flex: 1 }}>
        <LinearGradient
          start={LINEAR_START}
          end={LINEAR_END}
          colors={LINEAR_COLORS}
          style={styles.container}
        >
          <IgLogo isWhite={true} style={styles.logo} />
          {this.renderText('Sign in and use more features')}

          <IgInput style={styles.input} placeholder="Email or username" />
          <IgInput style={styles.input} placeholder="Password" />

          <IgButton label="Sign in" />

          <View style={styles.row}>
            {this.renderText('Forgot your login details?', styles.small)}
            {this.renderText('Get help signing in.', styles.small, styles.underlined)}
          </View>

          <View style={styles.lineContainer}>
            <IgLine color="white" width="40%" />
            {this.renderText('OR', styles.or)}
            <IgLine color="white" width="40%" />
          </View>

          <View style={styles.row}>
            <IgIcon name="facebook_lg" style={styles.facebook} />
            <Text style={styles.facebook}>Continue with facebook</Text>
          </View>

          <View style={styles.noAccount}>
            {this.renderText('Don\'t have an account?', styles.small)}
            {this.renderText('Sign in', styles.small, styles.underlined)}
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    )
  }
}
