import React from 'react'
import './PreLoader.scss';

export default function PreLoader() {
    return (
        <div className="preloader">
            <div className="dot first"></div>
            <div className="dot second"></div>
            <div className="dot last"></div>
        </div>
    )
}