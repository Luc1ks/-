import React from 'react';

import './Friend.scss';
import { CancelBtn } from '../btns/btns';

export default function Friend({data}) {
    return (
        <div className="friend">
            <div className="data">
                <div className="username">{data.username}</div>
            </div>
            <div className="controls">
                <CancelBtn>Удалить</CancelBtn>
            </div>
        </div>
    )
}