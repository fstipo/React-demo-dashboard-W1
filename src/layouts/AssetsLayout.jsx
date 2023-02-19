import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const AssetsLayout = () => {
    const navigate = useNavigate();
    return (
        <div id="content" className="app-content">
            <div className="d-flex align-items-center mb-3">
                <div>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active">Assets</li>
                    </ul>
                    <h1 className="page-header mb-0">Assets</h1>
                </div>
                <div className="ms-auto">
                    <a href="#" className="btn btn-primary"
                    ><i className="fa fa-plus-circle fa-fw me-1"></i>Create Asset</a>
                </div>
            </div>
            < div className="card" >
                <ul className="nav nav-tabs nav-tabs-v2 px-4" >
                    <li className="nav-item me-3">
                        <button className="nav-link active px-2" data-bs-toggle="tab" to="all" onClick={() => navigate("/assets")}>All</button>
                    </li>
                    <li className="nav-item me-3">
                        <button className="nav-link px-2" to="in-moment" data-bs-toggle="tab" onClick={() => navigate("/assets/in-moment")} >In Moment</button>
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

export default AssetsLayout




