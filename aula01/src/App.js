import React, { Component, Fragment } from 'react'
import { Title, HeroList, AddHeroForm } from './components'
import './App.css'
import heroes from './heroes.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { heroes: [] }
  }

  componentDidMount() {
    this.setState({ heroes })
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('prevState', prevState)
  //   console.log('actualState', this.state)
  // }

  addHero = (hero) => {
    heroes.push(hero)
    this.setState({ heroes })
  }

  render() {
    return (
      <Fragment>
        <Title name="Heroes" />
        <div className="container">
          <AddHeroForm onAddHero={this.addHero} />
          <HeroList heroes={this.state.heroes} />
        </div>
      </Fragment>
    )
  }
}

export default App;
