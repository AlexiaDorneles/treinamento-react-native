import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'

import api from './api/feed.json'
import like from './img/like.png'
import dots from './img/dots.png'
import likedFull from './img/like-full.png'
import instagramLogo from './img/instagram_logo.png'
import send from './img/send.png'
import camera from './img/camera.png'

import { Direct, Chat } from './components/scene'

const width = Dimensions.get('window').width

class App extends Component {
  renderPosts() {
    return api.feed.map(({ autor, local, imagem, perfil, curtidas, liked }, index) => (
      <View key={index}>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{ width: 50, height: 50, borderRadius: 50, margin: 10 }} source={{ uri: perfil }} />
          <View style={{ justifyContent: 'center' }}>
            <Text>{autor} </Text>
            {!!local ? <Text>{local} </Text> : null}
          </View>
          <Image style={{ marginLeft: 'auto', marginRight: 20, width: 20, height: 20 }} source={dots} />
        </View>
        <Image
          style={{ width, height: width }}
          source={{ uri: imagem }}
        />
        <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
          {
            liked ? <Image style={{ width: 20, height: 20, marginRight: 10 }} source={likedFull} />
              : <Image style={{ width: 20, height: 20, marginRight: 10 }} source={like} />
          }
          <Text>{curtidas} Likes</Text>
        </View>
      </View>
    ))
  }

  renderHeader() {
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'center',
        marginVertical: 10,
      }}>
        <Image source={camera} style={{ width: 20, height: 20 }} />
        <Image source={instagramLogo} style={{ width: 100, maxHeight: 30 }} />
        <Image source={send} style={{ width: 20, height: 20 }} />
      </View>
    )
  }

  renderFooter() {
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center',
        paddingVertical: 10,
      }}>
        <Image source={camera} style={{ width: 22, height: 22 }} />
        <Image source={send} style={{ width: 22, height: 22 }} />
        <Image source={camera} style={{ width: 22, height: 22 }} />
        <Image source={send} style={{ width: 22, height: 22 }} />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Direct /> */}
        <Chat />
      </View>
      //   {this.renderHeader()}
      //   <ScrollView style={styles.container} >
      //     {this.renderPosts()}
      //   </ScrollView>
      //   {this.renderFooter()}
      // </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    fontFamily: 'Lato-Bold',
  },
})
