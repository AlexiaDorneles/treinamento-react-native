import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import { ProfilePicture, Info } from '../../../generic'

import camIcon from '../../../../img/camera.png'
const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  info: {
    flex: 1,
  },
  camera: {
    width: 25,
    height: 25,
    marginLeft: 'auto',
    marginRight: 20,
  },
  groupPic: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  groupPicBackground: {
    position: 'absolute',
    top: 8,
    left: 8,
    borderRadius: 50,
    backgroundColor: 'white',
    width: 70,
    height: 70,
    margin: 10,
  },
})

const renderSingle = (direct) => (
  <View style={styles.container}>
    <ProfilePicture picture={direct.profilePic} isOnline={direct.isOnline} />
    <Info title={direct.name} subtitle={direct.message} stule={styles.info} />
    <Image source={camIcon} style={styles.camera} />
  </View>
)

const renderGroup = (direct) => (
  <View style={styles.container}>
    <View style={styles.groupPicContainer}>
      <ProfilePicture picture={direct.users[1].profilePic} />
      <View style={styles.groupPicBackground} />
      <ProfilePicture style={styles.groupPic} picture={direct.users[0].profilePic} />
    </View>
    <Info title={direct.name} subtitle={direct.message} stule={styles.info} />
    <Image source={camIcon} style={styles.camera} />
  </View>
)

export const DirectItem = ({ direct }) => {
  return direct.group ? renderGroup(direct) : renderSingle(direct)
}
