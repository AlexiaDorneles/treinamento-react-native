import React, { Fragment } from 'react'
import './input.css'

export const Input = (props) => (
    <Fragment>
        <label className="input__label">{props.label} </label>
        <input type="text" {...props} className="input" />
    </Fragment>
)