import React from 'react'

export const SidebarLink = ({ linkLabel, linkIcon }) => {
    return (
        <div className="menu-item">
            {/* <div className="menu-item active"> */}
            <a href="index.html" className="menu-link">
                <span className="menu-icon"><i className={`fa fa-${linkIcon}`}></i></span>
                <span className="menu-text">{linkLabel}</span>
            </a>
        </div>
    )
}
