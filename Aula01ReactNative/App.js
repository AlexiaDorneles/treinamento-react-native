import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Title, HeroList, AddHeroForm } from './src/components'
import heroes from './heroes.json'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { heroes: [] }
  }

  componentDidMount() {
    this.setState({ heroes })
  }

  addHero = (hero) => {
    heroes.push(hero)
    this.setState({ heroes })
  }
  render() {
    return (
      <ScrollView contentContainerStyle={STYLES.contentContainer}>
        <Title name="Heroes" />
        <View style={STYLES.container}>
          <AddHeroForm onAddHero={this.addHero} />
          <HeroList heroes={this.state.heroes} />
        </View>
      </ScrollView>
    )
  }
}

const STYLES = StyleSheet.create({
  container: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
