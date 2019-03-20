import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { IgHeader, IgFooter, IgPost } from '../../generic'

import api from '../../../api/feed.json'
import styles from './feed.style'
const left = { name: 'photo-camera' }
const center = { name: 'instagram_lg_black' }
const right = { name: 'paper-plane' }

export class Feed extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <IgHeader left={left} center={center} right={right} />
        <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.contentStyle} >
          {this.renderPosts()}
        </ScrollView>
        <IgFooter />
      </View >
    )
  }

  renderPosts() {
    return api.feed.map((post, index) => <IgPost post={post} key={index} />)
  }
}
