import React from 'react'
import { View } from 'react-native'
import { IgProfilePicture, IgInfo, IgIcon } from '@component'

import styles from './direct-item.style'

const renderSingle = (direct) => (
  <IgProfilePicture picture={direct.profilePic} isOnline={direct.isOnline} />
)

const renderGroup = (direct) => (
  <View style={styles.groupPicContainer}>
    <IgProfilePicture picture={direct.users[1].profilePic} />
    <View style={styles.groupPicBackground} />
    <IgProfilePicture style={styles.groupPic} picture={direct.users[0].profilePic} />
  </View>
)

export const DirectItem = ({ direct }) => {
  return (
    <View style={styles.container}>
      {direct.group ? renderGroup(direct) : renderSingle(direct)}
      <IgInfo title={direct.name} subtitle={direct.message} />
      <IgIcon name="photo-camera" style={styles.camera} />
    </View>
  )
}
