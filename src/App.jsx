import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Theme from './components/Theme'

function App() {
  console.log("App.jsx");

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





