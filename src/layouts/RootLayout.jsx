import React from 'react'
import { NavLink } from 'react-router-dom'

// pages
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import Main from './components/Main'
import Theme from './components/Theme'

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