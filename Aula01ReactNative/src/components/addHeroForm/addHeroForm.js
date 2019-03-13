import React, { Component } from 'react'
import { View } from 'react-native'
import { Input } from '../input/input'
import { Button } from '../button/button'
import STYLES from './addHeroForm.style'

export class AddHeroForm extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', image: '' }
  }

  onInputChange = (prop, value) => {
    this.setState({
      [prop]: value,
    })
  }

  onSubmit = () => {
    const { name, image } = this.state
    this.props.onAddHero({ name, image })
  }

  render() {
    return (
      <View style={STYLES}>
        <Input name="name" value={this.state.name} onChange={this.onInputChange} label="Name" />
        <Input name="image" value={this.state.image} onChange={this.onInputChange} label="Image" />
        <Button label="Register" onClick={this.onSubmit} />
      </View>
    )
  }
}
