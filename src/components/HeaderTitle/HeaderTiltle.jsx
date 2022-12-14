import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"

export const HeaderTiltle = () => {
    const navData = [
        {
            id: 1,
            url: "/",
            title: "Home"
        },
        {
            id: 2,
            url: "/about",
            title: "About"
        },
        {
            id: 3,
            url: "/portfolio",
            title: "Portfolio"
        },
        {
            id: 4,
            url: "/services",
            title: "Services"
        },
        {
            id: 5,
            url: "/vacancies",
            title: "Vacancies"
        },
    ]
    
    return (
        <>
            {navData.map(item => {
                return (
                    <li key={item.id}>
                        <NavLink to={item.url} className="animation-a">
                            {item.title}
                        </NavLink>
                    </li>
                )
            })}
        </>
    )
}
