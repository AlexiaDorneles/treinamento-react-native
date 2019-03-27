import React from 'react'
import { ScrollView, StatusBar } from 'react-native'
import { IgPost } from '@component'
import { BaseScreen } from '@ui/screen'

import api from '@api/feed.json'
import styles from './feed.style'

export class FeedScreen extends BaseScreen {
  renderContent() {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.contentStyle} >
        {this.renderPosts()}
      </ScrollView>
    )
  }

  screenDidFocus() {
    this.setState({})
  }

  screenWillFocus() {
    StatusBar.setTranslucent(false)
  }

  renderPosts() {
    return api.feed.map((post, index) => <IgPost post={post} key={index} />)
  }
}
