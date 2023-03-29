import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {

    return (
        <div className="main">
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Outlet />
            <a href="#" data-click="scroll-top" className="btn-scroll-top ">
                <i className="fa fa-arrow-up"></i>
            </a>
        </div>)
}

export default Main