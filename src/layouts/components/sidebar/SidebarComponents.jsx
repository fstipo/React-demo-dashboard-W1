import React from 'react'
import { NavLink } from "react-router-dom"

export const SidebarLink = ({ linkLabel, linkIcon, to }) => {
    return (
        <div className="menu-item">
            <NavLink to={to} className="menu-link" >
                <span className="menu-icon"><i className={`fa fa-${linkIcon}`}></i></span>
                <span className="menu-text">{linkLabel}</span>
            </NavLink >
        </div >
    )
}
