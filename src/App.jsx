import React from 'react'
import './App.css'
import Header from "./components/header/Header"
import Main from './components/Main'
import Sidebar from './components/sidebar//Sidebar'
import Theme from './components/Theme'

const App = () => {

  return (
    // TODO app - sidebar - minified add class invisible on navigation
    < div id="app" className="app" >
      <Header />
      <Sidebar />
      <Main />
      <Theme />
    </ div>
  )
}

export default App





