import React from 'react';

import './Navbar.scss';
import {  useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';


const routes = [
    {
        url: '/',
        name: 'MM'
    },
    {
        url: '/friends',
        name: 'Friends'
    },
    {
        url: '/notifications',
        name: 'nots'
    },
    {
        url: '/game/lobby',
        name: 'Lobby'
    }
]

export default function Navbar() {
    const location = useLocation();

    return (
        <div className="navbar">
            {
                routes.map(route => {
                    return (
                        <Link
                            className={location.pathname === route.url ? "navLink active" : 'navLink'}
                            to={route.url}
                            key={v4()}
                            >
                            {route.name}
                        </Link>
                    )
                })
            }
        </div>
    )
}