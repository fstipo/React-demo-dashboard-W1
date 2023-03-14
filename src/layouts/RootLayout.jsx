import React from 'react'
import ScrollToTop from '../pages/people/components/ScrollToTop'

// pages
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import Main from './components/Main'
import Theme from './components/Theme'

const RootLayout = () => {
    return (
        < div id="app" className="app" >
            <Header />
            <ScrollToTop />
            <Sidebar />
            <Main />
            <Theme />
        </ div>
    )
}

export default RootLayout