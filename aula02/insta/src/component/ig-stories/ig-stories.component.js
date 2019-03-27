import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { IgStory } from '../ig-story/ig-story.component'

import styles from './ig-stories.style'

const renderEach = (stories) => stories.map((s, i) => <IgStory key={i} picture={s.picture} name={s.name} />)
const renderMe = (me) => <IgStory picture={me.picture} name={'You'} isMe={true} />

export const IgStories = ({ stories, me }) => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.text}>Stories</Text>
      <Text style={styles.text}>Watch all</Text>
    </View>
    <ScrollView
      horizontal={true}
      style={styles.scrollContainer}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
    >
      {renderMe(me)}
      {renderEach(stories)}
    </ScrollView>
  </View >
)
