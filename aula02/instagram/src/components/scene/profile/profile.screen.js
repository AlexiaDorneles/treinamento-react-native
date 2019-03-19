import React, { Component } from 'react'
import { Header, ProfilePicture } from '../../generic'
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'

import styles from './profile.style'

import profile from '../../../api/profile.json'
import { ProfileRow } from './profile-row/profile-row.section'

const _capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)
const _mapToRow = (info, alwaysShowBorder = false) => {
  return Object.keys(info).map((key, index, arr) => (
    <ProfileRow
      key={index}
      value={info[key]}
      prop={_capitalize(key)}
      isShowBorder={alwaysShowBorder || index !== arr.length - 1}
    />
  ))
}

export class Profile extends Component {
  renderProfileInfo() {
    return _mapToRow(profile.info)
  }

  renderPrivateInfo() {
    return _mapToRow(profile.privateInfo, true)
  }

  renderImageContainer() {
    return (
      <View style={styles.imageContainer}>
        <ProfilePicture picture={profile.picture} imageStyle={styles.pictureStyle} />
        <TouchableOpacity >
          <Text style={styles.blueText}>Change Profile Photo</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <ScrollView>
        <Header left="Cancel" center="Edit Profile" right="Done" />
        {this.renderImageContainer()}
        <View style={styles.borderBottom}>
          {this.renderProfileInfo()}
        </View>
        <Text style={[styles.blueText, styles.subtitle]}>Tru Instagram Business Tool</Text>
        <View>
          <Text style={[styles.subtitle, styles.bold]}>Private Information</Text>
          {this.renderPrivateInfo()}
        </View>
      </ScrollView>
    )
  }
}
