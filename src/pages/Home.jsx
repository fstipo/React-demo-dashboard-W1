import React from 'react'
import Loader from '../layouts/components/Loader'
import Test from '../utils/Test'



const Home = () => {

    return (
        <div id="content" className="app-content">
            <ul className="breadcrumb">
                <li className="breadcrumb-item active">HOME PAGE</li>
            </ul>
            <Test />
            {/* <Loader /> */}
        </div>
    )
}

export default Home