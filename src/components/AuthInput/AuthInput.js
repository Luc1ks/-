import React from 'react'
import './AuthInput.scss'

export default function AuthInput({placeHodler = null}) {
    return (
        <input type="text" className="authInput" placeholder={placeHodler} />
    )
}