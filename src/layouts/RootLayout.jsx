import Main from './components/Main';
import Theme from './components/Theme';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

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