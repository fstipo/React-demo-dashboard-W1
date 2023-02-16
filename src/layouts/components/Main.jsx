import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {

    return (
        <>
            <div id="content" className="app-content">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item active">HOME PAGE</li>
                </ul>

                {/* <h1 className="page-header">
                    Starter <small>page header description goes here...</small>
                </h1> */}
            </div>
            {/* <!-- END #content --> */}
            {/* <!-- BEGIN btn-scroll-top --> */}
            <a href="#" data-click="scroll-top" className="btn-scroll-top fade"><i className="fa fa-arrow-up"></i></a>
            {/* <Child /> */}
            <Outlet />
        </>
    )
}

export default Main