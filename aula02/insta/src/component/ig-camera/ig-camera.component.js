import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { RNCamera } from 'react-native-camera'
import Permissions from 'react-native-permissions'

const CAMERA_PERMISSION_NAME = 'camera'
const MIC_PERMISSION_NAME = 'microphone'
const AUTHORIZED = 'authorized'

import { styles } from './ig-camera.style'

export class IgCamera extends Component {
  state = { cameraPermission: '', micPermission: '' }

  constructor(props) {
    super(props)

    this.takePicture = this.takePicture.bind(this)
  }

  buildPublicCameraReference() {
    return {
      takePicture: this.takePicture,
    }
  }

  componentDidMount() {
    this._requestAll()
  }

  async _requestAll() {
    await this._requestCameraPermission()
    await this._requestMicPermission()
  }

  _hasPermission() {
    return this.state.cameraPermission === AUTHORIZED
      && this.state.micPermission === AUTHORIZED
  }

  async _requestCameraPermission() {
    await this._execRequestPermission(CAMERA_PERMISSION_NAME, 'cameraPermission')
  }

  async _requestMicPermission() {
    await this._execRequestPermission(MIC_PERMISSION_NAME, 'micPermission')
  }

  async _execRequestPermission(permissionName, stateRef) {
    const answer = await Permissions.request(permissionName)
    this.setState({ [stateRef]: answer })
  }

  async _checkAll() {
    const response = await Permissions.checkMultiple([CAMERA_PERMISSION_NAME, MIC_PERMISSION_NAME])
    this.setState({
      cameraPermission: response.camera,
      micPermission: response.microphone,
    })
  }

  renderPermissionRequest() {
    return (
      <View style={styles.permissionRequest.container}>
        <Text style={styles.permissionRequest.title}>
          Precisamos de permissão para acessar sua câmera e seu microfone!
        </Text>
        <TouchableOpacity
          style={styles.permissionRequest.button}
          onPress={this._requestPermissions}
          activeOpacity={0.8}
        >
          <Text style={styles.permissionRequest.buttonText}>
            PERMITIR
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderCamera() {
    return (
      <View style={styles.camera.container}>
        <RNCamera
          style={styles.camera.rnCamera}
          ref={this.onRef}
          flashMode={RNCamera.Constants.FlashMode.auto}
          type={RNCamera.Constants.Type.back}
        />
      </View>
    )
  }

  onRef = (reference) => {
    this.camera = reference
    this.props.cameraRef(this.buildPublicCameraReference())
  }

  async takePicture() {
    if (this.camera && this._hasPermission()) {
      const options = { base64: true, pauseAfterCapture: true }
      const data = await this.camera.takePictureAsync(options)
      this.camera.resumePreview()
      return data.uri
    }
  }

  render() {
    return !!this._hasPermission() ? this.renderCamera() : this.renderPermissionRequest()
  }
}
