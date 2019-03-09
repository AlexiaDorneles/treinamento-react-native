import React from 'react'
import './button.css'

export const Button = ({ onClick, label, type = 'submit' }) => (
    <button
        className="button"
        type={type}
        onClick={onClick}
    >
        {label}
    </button>
)