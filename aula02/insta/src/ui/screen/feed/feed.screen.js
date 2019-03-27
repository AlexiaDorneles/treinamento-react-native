import React from 'react'
import { ScrollView, StatusBar, View } from 'react-native'
import { IgPost, IgStories } from '@component'
import { BaseScreen } from '@ui/screen'
import { StorageService, DogService } from '@service'

import styles from './feed.style'

const PICTURES_KEY = 'picture'
const dogNames = ['billyblack', 'welch', 'robertbanks', 'andrea']

export class FeedScreen extends BaseScreen {
  state = { pictures: [], stories: [], me: {} }

  constructor() {
    super()
    this.dogService = new DogService()
  }

  async componentDidMount() {
    super.componentDidMount()
  }

  async _updateImages() {
    return await StorageService.getObject(PICTURES_KEY, [])
  }

  async screenDidFocus() {
    const pictures = await this._updateImages()
    const dogs = await this._getDogs()
    const me = await this._getRandomDog()
    this.setState({ stories: dogs, me, pictures })
  }

  async _getDogs() {
    const { message } = await this.dogService.getRandomDogs(9)
    return message.map((img, index) => ({
      picture: img,
      name: dogNames[index % 4],
    }))
  }

  async _getRandomDog() {
    const response = await this.dogService.getRandomDog()
    return { picture: response.message }
  }

  screenWillFocus() {
    StatusBar.setTranslucent(false)
  }

  renderPosts() {
    return this.state.pictures.map(p => ({ imagem: p })).map((post, index) => <IgPost post={post} key={index} />)
  }
  renderContent() {
    return (
      <View style={{ flex: 1 }}>
        <IgStories stories={this.state.stories} me={this.state.me} />
        <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.contentStyle} showsVerticalScrollIndicator={false}>
          {this.renderPosts()}
        </ScrollView>
      </View>
    )
  }
}
