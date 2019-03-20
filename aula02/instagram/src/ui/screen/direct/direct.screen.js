import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { DirectItem } from './direct-item/direct-item.section'
import { DirectFooter } from './direct-footer/direct-footer.section'
import { IgHeader, IgSearch } from '@component'

const leftIcon = { name: 'left-arrow' }
const centerIcon = { name: 'instagram_lg_black' }
const rightIcon = { name: 'add-square' }

import list from '@api/direct.json'
import styles from './direct.style'

export class DirectScreen extends Component {
  renderItems() {
    return list.map((i, index) => (
      <DirectItem direct={i} key={index} />
    ))
  }

  renderHeader() {
    return (
      <IgHeader left={leftIcon} center={centerIcon} right={rightIcon} />
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* {this.renderHeader()} */}
        <ScrollView contentContainerStyle={styles.container}>
          <IgSearch style={styles.searchBar} />
          {this.renderItems()}
          <DirectFooter />
        </ScrollView>
      </View>
    )
  }
}
