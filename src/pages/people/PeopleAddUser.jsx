import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const PeopleAddUser = () => {
    return (
        <div id="content" className="app-content">
            <div  >
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/people">People</Link></li>
                    <li className="breadcrumb-item active">Add User</li>
                </ul>
                <div className="d-flex align-items-center mb-3">
                    <h1 className="page-header mb-0">Add User</h1>
                </div>
            </div >


            <div className="card container">

                <div className="container p-5">

                    <form action="index.html" method="POST" name="login_form">

                        <div className="mb-3">
                            <label className="form-label">ID</label>
                            <input
                                type="number"
                                className="form-control form-control-lg fs-15px"
                                // value=""
                                placeholder="User ID"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control form-control-lg fs-15px"
                                // value=""
                                placeholder="User full name"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Sector</label>
                            <input
                                type="text"
                                className="form-control form-control-lg fs-15px"
                                // value=""
                                placeholder="User sector"
                            />
                        </div>

                        <div className="mb-5">
                        </div>
                        <button
                            type="submit"
                            className="btn bg-theme text-white btn-lg d-block w-100 fw-500 mb-3"
                        >
                            Add User
                        </button>
                    </form>
                </div>

            </div >
        </div >
    )
}

































export default PeopleAddUser