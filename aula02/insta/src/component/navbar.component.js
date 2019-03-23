import React, { Component, Fragment } from 'react'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import { IgIcon } from '@component'

import styles from './navbar.style'
import { DIRECT_ROUTES } from '@ui/navigator/routes/direct'
import { CAMERA_ROUTES } from '@ui/navigator/routes/camera'

const _getStyle = (position, text = false) => position === 1 ?
  (text ? styles.center : { ...styles.center, fontSize: 25 }) : styles.corners

const _resolveHeader = (item, position) => {
  if (item.name) return <IgIcon name={item.name} style={_getStyle(position)} />
  return <Text style={_getStyle(position, true)}>{item}</Text>
}

export class NavBar extends Component {

  goDirect = () => {
    this.props.navigation.navigate(DIRECT_ROUTES.DIRECT, { title: 'Direct Message' })
  }

  goCamera = () => {
    this.props.navigation.navigate(CAMERA_ROUTES.CAMERA, { title: 'Camera' })
  }

  render() {
    const left = { name: 'photo-camera' }
    const center = { name: 'instagram_lg_black' }
    const right = { name: 'paper-plane' }

    return (
      <Fragment>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={'transparent'}
        />
        <View style={styles.container}>
          <TouchableOpacity onPress={this.goCamera}>
            {_resolveHeader(left, 0)}
          </TouchableOpacity>
          <TouchableOpacity>
            {_resolveHeader(center, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goDirect}>
            {_resolveHeader(right, 2)}
          </TouchableOpacity>
        </View>
      </Fragment>
    )
  }
}
