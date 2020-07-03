import React from 'react'
import './AuthInput.scss'

export default function AuthInput({placeHodler = null, ...rest}) {
    return (
        <input type="text" className="authInput" placeholder={placeHodler} {...rest}/>
    )
}