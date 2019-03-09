import React from 'react'
import './hero.css'

export const Hero = ({ hero }) => (
    <div className="hero__card">
        <div className="hero__card--shadow" />
        <img className="hero__image" src={hero.image} alt={hero.name} />
        <span className="hero__name">{hero.name}</span>
    </div>
)