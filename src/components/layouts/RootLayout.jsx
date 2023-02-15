import React from 'react'
import { NavLink } from 'react-router-dom'

// pages
import Header from '../component/header/Header'
import Sidebar from '../component/sidebar/Sidebar'
import Main from '../component/Main'
import Theme from '../component/Theme'

const RootLayout = () => {
    return (
        < div id="app" className="app" >
            <Header />
            <Sidebar />
            <Main />
            <Theme />
        </ div>
    )
}

export default RootLayout