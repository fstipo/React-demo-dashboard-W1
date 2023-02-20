import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {

    return (
        <>
            <Outlet />
            <a href="#" data-click="scroll-top" className="btn-scroll-top ">
                <i className="fa fa-arrow-up"></i>
            </a>
        </>)
}

export default Main