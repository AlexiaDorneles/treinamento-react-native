import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { DirectItem } from './directItem/directItem'
import { Header, Footer } from '../../generic'

import backArrow from '../../../img/back-arrow.png'
import plus from '../../../img/plus.png'
import instalogo from '../../../img/instagram_logo.png'

import list from '../../../api/direct.json'

export class Direct extends Component {
  renderItems() {
    return list.map((i, index) => (
      <DirectItem direct={i} key={index} />
    ))
  }

  renderHeader() {
    return (
      <Header left={backArrow} center={instalogo} right={plus} />
    )
  }

  renderFooter() {
    return (
      <Footer />
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderHeader()}
        <ScrollView>
          {this.renderItems()}
        </ScrollView>
        {this.renderFooter()}
      </View>
    )
  }
}
