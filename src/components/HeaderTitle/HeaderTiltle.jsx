import React from 'react'
import { NavLink } from 'react-router-dom'
import { Language } from '../../services/lang'
import "./index.scss"

export const HeaderTiltle = () => {
    const navData = [
        {
            id: 1,
            url: "/",
            title: Language("HOME")
        },
        {
            id: 2,
            url: "/about",
            title: Language("ABOUT")
        },
        {
            id: 3,
            url: "/portfolio",
            title: Language("PORTFOLIO")
        },
        {
            id: 4,
            url: "/services",
            title: Language("SERVICES")
        },
        {
            id: 5,
            url: "/vacancies",
            title: Language("VACANCIES")
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
