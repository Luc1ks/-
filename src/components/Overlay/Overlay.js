import React from 'react';
import './Overlay.scss';

export default function Overlay({ show, children }) {
    return (
        <div className={"overlay " + show}>{children}</div>
    )
}