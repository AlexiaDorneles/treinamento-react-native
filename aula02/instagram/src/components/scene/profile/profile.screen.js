import React, { Component, Fragment } from 'react'
import { Header, ProfilePicture } from '../../generic'
import { View, TouchableOpacity, Text } from 'react-native'

import styles from './profile.style'

import profile from '../../../api/profile.json'
import { ProfileRow } from './profile-row/profile-row.section'

const _capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)
const _mapToRow = (info) => {
  return Object.keys(info).map((key, index) => (
    <ProfileRow key={index} value={info[key]} prop={_capitalize(key)} />
  ))
}

export class Profile extends Component {
  renderProfileInfo() {
    return _mapToRow(profile.info)
  }

  renderPrivateInfo() {
    return _mapToRow(profile.privateInfo)
  }

  render() {
    return (
      <Fragment>
        <Header left="Cancel" center="Edit Profile" right="Done" />
        <View style={styles.imageContainer}>
          <ProfilePicture picture={profile.picture} />
          <TouchableOpacity style={styles.blueText}>
            <Text>Change Profile Photo</Text>
          </TouchableOpacity>
        </View>

        <View>
          {this.renderProfileInfo()}
        </View>

        <Text style={[styles.blueText, styles.lightText]}>Tru Instagram Business Tool</Text>

        <View>
          {this.renderPrivateInfo()}
        </View>
      </Fragment>
    )
  }
}
