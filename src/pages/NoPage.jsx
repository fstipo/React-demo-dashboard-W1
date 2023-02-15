import React from 'react'
import { NavLink } from 'react-router-dom'

const NoPage = () => {
    return (
        <div className='text-center'>
            <div id="app" className="app app-full-height app-without-header">

                <div className="error-page">

                    <div className="error-page-content">
                        <div className="error-img">
                            <div className="error-img-code">404</div>
                            <img src="assets/img/page/404.svg" alt="" />
                        </div>

                        <h1>Oops!</h1>
                        <h3>We can't seem to find the page you're looking for</h3>
                        <NavLink to="/" className="btn btn-outline-default">
                            Go to homepage</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoPage