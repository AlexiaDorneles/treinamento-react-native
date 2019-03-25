import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import { BaseScreen } from '@ui/screen/base'
import { IgCamera } from '@component'

import { styles } from './camera.style'
import { imgMockService } from '@service'

export class CameraScreen extends BaseScreen {
  constructor(props) {
    super(props)

    this.state = {
      cameraPermission: null,
    }

    this.takePicture = this.takePicture.bind(this)
    this.onRef = this.onRef.bind(this)
  }

  onRef(reference) {
    this.igcamera = reference
  }

  async takePicture() {
    const pictureUri = await this.igcamera.takePicture()
    imgMockService.setImg(pictureUri)
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

  renderContent() {
    return (
      <View style={styles.container}>
        <IgCamera cameraRef={this.onRef} />
        <View style={styles.controlsContainer}>
          {this.renderCameraButton()}
        </View>
      </View>
    )
  }
}
