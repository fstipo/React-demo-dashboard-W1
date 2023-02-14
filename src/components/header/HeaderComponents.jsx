import React from 'react'

export const Toggler = ({ viewToggler, sidebarToggler }) => {
    return (
        <div className={`${viewToggler}-toggler`}>
            <button type="button" className="menu-toggler" data-toggle={`sidebar-${sidebarToggler}`}>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
        </div>
    )
}

export const ProfileDropdownItem = ({ profileLabel, profileIcon }) => {
    return (
        <a className="dropdown-item d-flex align-items-center" href="#">{profileLabel}<i className={`fa fa-${profileIcon} fa-fw ms-auto text-gray-400 f-s-16`}></i></a>
    )
}




