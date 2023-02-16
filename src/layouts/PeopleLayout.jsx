import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PeopleLayout = () => {
    return (
        <div id="content" className="app-content">
            <div className="d-flex align-items-center mb-1">
                <div>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active">People</li>
                    </ul>
                    <h1 className="page-header mb-0">People</h1>
                </div>
                <div className="ms-auto">
                    <a href="#" className="btn btn-primary"
                    ><i className="fa fa-user-plus fa-fw me-1"></i>Create User</a>
                </div>
            </div>
            < div className="card" >
                <ul className="nav nav-tabs nav-tabs-v2 px-4" >
                    <li className="nav-item me-3">
                        <a href="#allTab" className="nav-link active px-2" data-bs-toggle="tab"
                        >All</a>
                    </li>
                    <li className="nav-item me-3">
                        <a href="#publishedTab" className="nav-link px-2" data-bs-toggle="tab"
                        >In Moment</a>
                    </li>
                </ul >

                <div className="tab-content p-2" >
                    <div className="tab-pane fade show active" id="allTab">
                    </div>
                </div >
                <Outlet />
            </div>
        </div >

    )
}

export default PeopleLayout




