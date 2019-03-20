import React from 'react'
import { View } from 'react-native'
import { IgIcon } from '../ig-icon/ig-icon.component'

import styles from './ig-footer.style'

export const IgFooter = () => (
  <View style={styles.container}>
    <IgIcon style={styles.icon} name="home" />
    <IgIcon style={styles.icon} name="search" />
    <IgIcon style={styles.icon} name="add-square" />
    <IgIcon style={styles.icon} name="heart-empty" />
    <IgIcon style={styles.icon} name="user" />
  </View>
)
