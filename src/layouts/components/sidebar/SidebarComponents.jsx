import React from 'react'
import { NavLink } from "react-router-dom"
import "./Sidebar.css"

export const SidebarLink = ({ linkLabel, linkIcon, to }) => {
    return (
        <div className="menu-item">
            {/* <NavLink NavLink to={to} className="menu-link" > */}
            <NavLink to={to} className="menu-link" >
                <span span className="menu-icon"><i className={`fa fa-${linkIcon}`}></i></span>
                <span className="menu-text">{linkLabel}</span>
            </NavLink >
        </div >
    )
}
