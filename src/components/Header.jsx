import React from 'react'

const Header = () => {
    console.log("Header.jsx");
    return (
        <div id="header" className="app-header">
            {/* <!-- BEGIN mobile-toggler --> */}
            <div className="mobile-toggler">
                <button type="button" className="menu-toggler" data-toggle="sidebar-mobile">
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
            {/* <!-- END mobile-toggler --> */}

            {/* <!-- BEGIN brand --> */}
            <div className="brand">
                <div className="desktop-toggler">
                    <button type="button" className="menu-toggler" data-toggle="sidebar-minify">
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>

                <a href="#" className="brand-logo">
                    <img src="assets/img/logo.png" alt="" height="20" />
                </a>
            </div>
            {/* <!-- END brand --> */}

            {/* <!-- BEGIN menu --> */}
            <div className="menu">
                <form className="menu-search" method="POST" name="header_search_form">
                    <div className="menu-search-icon"><i className="fa fa-search"></i></div>
                    <div className="menu-search-input">
                        <input type="text" className="form-control" placeholder="Search menu..." />
                    </div>
                </form>
                <div className="menu-item dropdown">
                    <a href="#" data-bs-toggle="dropdown" data-bs-display="static" className="menu-link">
                        <div className="menu-icon"><i className="fa fa-bell nav-icon"></i></div>
                        <div className="menu-label">0</div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end dropdown-notification">
                        <h6 className="dropdown-header text-gray-900 mb-1">Notifications</h6>
                        <div className="dropdown-notification-item bg-white">
                            No record found
                        </div>
                        <div className="p-2 text-center mb-n1">
                            <a href="#" className="text-gray-800 text-decoration-none">See all</a>
                        </div>
                    </div>
                </div>
                <div className="menu-item dropdown">
                    <a href="#" data-bs-toggle="dropdown" data-bs-display="static" className="menu-link">
                        <div className="menu-img online">
                            <div className="d-flex align-items-center justify-content-center w-100 h-100 bg-gray-800 text-gray-300 rounded-circle overflow-hidden">
                                <i className="fa fa-user fa-2x mb-n3"></i>
                            </div>
                        </div>
                        <div className="menu-text">username@account.com</div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end me-lg-3">
                        <a className="dropdown-item d-flex align-items-center" href="#">Edit Profile <i className="fa fa-user-circle fa-fw ms-auto text-gray-400 f-s-16"></i></a>
                        <a className="dropdown-item d-flex align-items-center" href="#">Inbox <i className="fa fa-envelope fa-fw ms-auto text-gray-400 f-s-16"></i></a>
                        <a className="dropdown-item d-flex align-items-center" href="#">Calendar <i className="fa fa-calendar-alt fa-fw ms-auto text-gray-400 f-s-16"></i></a>
                        <a className="dropdown-item d-flex align-items-center" href="#">Setting <i className="fa fa-wrench fa-fw ms-auto text-gray-400 f-s-16"></i></a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item d-flex align-items-center" href="#">Log Out <i className="fa fa-toggle-off fa-fw ms-auto text-gray-400 f-s-16"></i></a>
                    </div>
                </div>
            </div>
            {/* <!-- END menu --> */}
        </div>
    )
}

export default Header