import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'

import { BaseScreen } from '@ui/screen/base'
import { IgCamera } from '@component'

import { styles } from './camera.style'
import { StorageService } from '@service'

const PICTURES_KEY = 'picture'

export class CameraScreen extends BaseScreen {
  constructor(props) {
    super(props)

    this.state = {
      cameraPermission: null,
      pictures: [],
    }

    this.takePicture = this.takePicture.bind(this)
    this.onRef = this.onRef.bind(this)
  }

  async componentDidMount() {
    const pictures = await StorageService.getObject(PICTURES_KEY, [])
    this.setState({ pictures })
  }

  onRef(reference) {
    this.igcamera = reference
  }

  async takePicture() {
    const pictureUri = await this.igcamera.takePicture()
    const pictures = await StorageService.getObject(PICTURES_KEY)
    pictures.push(pictureUri)
    await StorageService.setObject(PICTURES_KEY, pictures)
    this.setState({ pictures })
  }

  renderCameraButton() {
    return (
      <TouchableOpacity
        style={styles.shotButton}
        activeOpacity={0.8}
        onPress={this.takePicture}
      />
    )
  }
  renderImagePreview() {
    return (
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: this.state.pictures.pop() }}
          style={styles.imagePreview}
        />
      </View>
    )
  }

  renderContent() {
    return (
      <View style={styles.container}>
        <IgCamera cameraRef={this.onRef} />
        <View style={styles.controlsContainer}>
          {this.renderCameraButton()}
          {this.renderImagePreview()}
        </View>
      </View>
    )
  }
}
