import React from 'react'
import { Link } from 'react-router-dom'

const Assets = () => {
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
                        <a href="#allTab" className="nav-link active px-2" data-bs-toggle="tab"
                        >All</a>
                    </li>
                    <li className="nav-item me-3">
                        <a href="#publishedTab" className="nav-link px-2" data-bs-toggle="tab"
                        >In Moment</a>
                    </li>
                </ul >
            </div>

            <div className="tab-content p-4" >
                <div className="tab-pane fade show active" id="allTab">
                </div>
            </div >
        </div >
    )
}

export default Assets
