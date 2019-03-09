import React, { PureComponent } from 'react'
import heroesImage from '../../assets/image/heroes.png'

import './title.css'

export class Title extends PureComponent {
    render() {
        return (
            <div className="title">
                <img src={heroesImage} alt="heroes" />
                <div className="title__background" />
                <h1 className="title__text">Welcome to React, {this.props.name}!</h1>
            </div>
        )
    }
}

// pure component
// react memo