import React from 'react'
import { ScrollView, StatusBar, Image } from 'react-native'
import { IgPost } from '@component'
import { BaseScreen } from '@ui/screen'
import { imgMockService } from '@service'

import api from '@api/feed.json'
import styles from './feed.style'

export class FeedScreen extends BaseScreen {
  renderContent() {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.contentStyle} >
        {/* Mock teste da camera */}
        <Image style={{ width: 300, height: 300 }} source={imgMockService.getImgAsObject()} />
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
