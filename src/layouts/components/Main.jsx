import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {

    return (
        <>
            {/* <div id="content" className="app-content">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item active">HOME PAGE</li>
                </ul>
            </div> */}


            <Outlet />
        </>
    )
}

export default Main