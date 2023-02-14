import './App.css'
import Header from "./components/header/Header"
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Theme from './components/Theme'

const App = () => {

  return (
    < div id="app" className="app" >
      <Header />
      <Sidebar />
      <Main />
      <Theme />
    </ div>
  )
}

export default App





