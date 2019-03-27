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
    const { message } = await this.dogService.getRandomDogs(9)
    const dogs = message.map((img, index) => ({
      picture: img,
      name: dogNames[index % 4],
    }))

    const response = await this.dogService.getRandomDog()
    const me = { picture: response.message }
    this.setState({ stories: dogs, me, pictures })
  }

  screenWillFocus() {
    StatusBar.setTranslucent(false)
  }

  renderPosts() {
    return this.state.pictures.map(p => ({ imagem: p })).map((post, index) => <IgPost post={post} key={index} />)
  }
  renderContent() {
    return (
      <View>
        <IgStories stories={this.state.stories} me={this.state.me} />
        <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.contentStyle} >
          {this.renderPosts()}
        </ScrollView>
      </View>
    )
  }
}
