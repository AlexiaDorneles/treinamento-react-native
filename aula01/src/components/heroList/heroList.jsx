import React, { Fragment } from 'react'
import { Hero } from '../hero/hero'
import './heroList.css'

const handleEmptyList = (list) => {
    return !list || !list.length ? <p>Nenhum Herói na lista</p> : null
}

const renderHeroes = (heroes) => {
    return !heroes.length ? null : heroes.map(h => <Hero key={h.name} hero={h} />)
}

export const HeroList = ({ heroes }) => {
    return (
        <Fragment>
            <h1 className="heroes__title">Heroes </h1>
            {handleEmptyList(heroes)}
            {renderHeroes(heroes)}
        </Fragment>
    )
}