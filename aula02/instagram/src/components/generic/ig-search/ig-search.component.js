import React, { PureComponent } from 'react'
import { View, TextInput } from 'react-native'
import { IgIcon } from '../ig-icon/ig-icon.component'

import styles from './ig-search.style'

export class IgSearch extends PureComponent {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <IgIcon name="search" style={styles.icon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#aaaaaa"
        />
      </View>
    )
  }
}
