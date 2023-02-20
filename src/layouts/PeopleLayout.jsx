
import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const PeopleLayout = () => {
    const navigate = useNavigate();
    return (
        <div id="content" className="app-content">
            <div className="d-flex align-items-center mb-3">
                <div>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active">People</li>
                    </ul>
                    <h1 className="page-header mb-0">People</h1>
                </div>
                <div className="ms-auto">
                    <a href="#" className="btn bg-theme text-white"
                    ><i className="fa fa-user-plus fa-fw me-1"></i>Add User</a>
                </div>
            </div>
            < div className="card" >
                <ul className="nav nav-tabs nav-tabs-v2 px-4" >
                    <li className="nav-item me-3">
                        <button className="nav-link active px-2" data-bs-toggle="tab" to="all" onClick={() => navigate("/people")}>All</button>
                    </li>
                    <li className="nav-item me-3">
                        <button className="nav-link px-2" to="in-moment" data-bs-toggle="tab" onClick={() => navigate("/people/in-moment")} >In Moment</button>
                    </li>
                </ul >

                <div className="tab-content p-1" >
                    <div className="tab-pane fade show active" id="allTab">
                    </div>
                </div >
                <Outlet />
            </div>
        </div >

    )
}

export default PeopleLayout




