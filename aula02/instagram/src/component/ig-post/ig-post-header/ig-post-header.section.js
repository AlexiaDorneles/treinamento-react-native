import React from 'react'
import { View, Text } from 'react-native'

import styles from './ig-post-header.style'
import { IgProfilePicture } from '../../ig-profile-picture/ig-profile-picture.component'
import { IgIcon } from '../../ig-icon/ig-icon.component'

export const IgPostHeader = ({ profilePicture, author, place }) => (
  <View style={styles.container}>
    <IgProfilePicture picture={profilePicture} imageStyle={styles.image} />
    <View style={styles.text}>
      <Text>{author} </Text>
      {!!place ? <Text>{place} </Text> : null}
    </View>
    <IgIcon style={styles.dots} name="dots" />
  </View>
)
