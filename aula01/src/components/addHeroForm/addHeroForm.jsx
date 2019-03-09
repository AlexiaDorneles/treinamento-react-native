import React, { Component } from 'react'
import { Input } from '../input/input'
import { Button } from '../button/button'
import './addHeroForm.css'

export class AddHeroForm extends Component {
    constructor(props) {
        super(props)
        this.state = { name: '', image: '' }
    }

    onInputChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        const { name, image } = this.state
        this.props.onAddHero({ name, image })
    }

    render() {
        return (
            <form className="addHeroForm" onSubmit={this.onSubmit}>
                <Input name="name" value={this.state.name} onChange={this.onInputChange} label="Name" />
                <Input name="image" value={this.state.image} onChange={this.onInputChange} label="Image" />
                <Button label="Register" onClick={this.onSubmit} />
            </form>
        )
    }
}