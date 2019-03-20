import React from 'react'
import { View, Image, Text } from 'react-native'
import { IgPostHeader } from './ig-post-header/ig-post-header.section'

import styles from './ig-post.style'
import { IgIcon } from '../ig-icon/ig-icon.component'

const resolveLikedPost = (liked) => (
  <IgIcon style={styles.likedIcon} name={liked ? 'heart-full' : 'heart-empty'} />
)

export const IgPost = ({ post }) => (
  <View style={styles.container}>
    <IgPostHeader profilePicture={post.perfil} author={post.autor} place={post.local} />
    <Image
      style={styles.image}
      source={{ uri: post.imagem }}
    />
    <View style={styles.info}>
      {resolveLikedPost(post.liked)}
      <Text style={styles.liked}>{post.curtidas} Likes</Text>
    </View>
  </View>
)
