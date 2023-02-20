import React from 'react'
import { Toggler } from "./HeaderComponents"
import { ProfileDropdownItem } from './HeaderComponents'

const Header = () => {

    return (
        <div id="header" className="app-header">
            {/* BEGIN mobile-toggler  */}
            <Toggler viewToggler="mobile" sidebarToggler="mobile" />
            {/* BEGIN brand  */}
            <div className="brand">
                <Toggler viewToggler="desktop" sidebarToggler="minify" />
                <a href="#" className="brand-logo">
                    <img src="/assets/img/logo.png" alt="" height="20" />
                </a>
            </div>
            {/* END brand  */}

            {/* BEGIN menu  */}
            <div className="menu">
                <form className="menu-search invisible" />
                {/* BEGIN profile */}
                <div className="menu-item dropdown">
                    <a href="#" data-bs-toggle="dropdown" data-bs-display="static" className="menu-link">
                        <div className="menu-img online">
                            {/* user picture */}
                            <img src="/assets/img/user/user-9.jpg" alt="" className="ms-100 mh-100 rounded-circle"></img>
                            <div className="d-flex align-items-center justify-content-center w-100 h-100 bg-gray-800 text-gray-300 rounded-circle overflow-hidden">
                                <i className="fa fa-user fa-2x mb-n3"></i>
                            </div>
                        </div>
                        <div className="menu-text">john@axellon.com</div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end me-lg-3">
                        <ProfileDropdownItem profileLabel="Edit Profile" profileIcon="user-circle" />
                        <ProfileDropdownItem profileLabel="Settings" profileIcon="wrench" />
                        <div className="dropdown-divider"></div>
                        <ProfileDropdownItem profileLabel="Log Out" profileIcon="toggle-off" />
                    </div>
                </div>
            </div>
            {/* <!-- END menu --> */}
        </div>
    )
}

export default Header