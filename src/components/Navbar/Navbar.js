import React, { useEffect } from 'react';

import './Navbar.scss';
import { Route, useLocation } from 'react-router';
import { Link } from 'react-router-dom';


const routes = [
    {
        url: '/',
        name: 'MM'
    },
    {
        url: '/friends',
        name: 'Friends'
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
                            to={route.url}>
                            {route.name}
                        </Link>
                    )
                })
            }
        </div>
    )
}