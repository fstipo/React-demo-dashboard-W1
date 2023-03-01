import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useUserDetails } from '../../hooks/usePeople';
import UserForm from './components/UserForm';
import PeopleUserDetailsFunction from './PeopleUserDetailsFunction';

const PeopleDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: userDetail
    } = useUserDetails(id);
    return (
        <div id="content" className="app-content">
            <div>
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/people">People</Link></li>
                    <li className="breadcrumb-item active">Person Details</li>
                </ul>
            </div >
            <div className='container-fluid'>
                <div className="row">
                    <PeopleUserDetailsFunction />
                    <div className="col-xl-1 col-xxl-4"></div>
                    <div className="col-lg-8 col-xl-4 col-xxl-3">
                        <div className="navbar navbar-sticky d-block px-4">
                            <div className="d-flex align-items-center">
                                <h4 className="xpage-header">
                                    Activity
                                </h4>

                                <a href="#" className="ms-auto text-muted p-2">Show all activities</a>

                            </div>


                            <div className="card">
                                <div className="card-header fw-600">Today, Nov 4</div>
                                <div className="widget-reminder">
                                    <div className="widget-reminder-item">
                                        <div className="widget-reminder-time">20:04</div>
                                        <div className="widget-reminder-divider bg-danger"></div>
                                        <div className="widget-reminder-content">
                                            <div className="fs-13px">Deleted by</div>
                                            <div className="d-flex align-items-center mt-1">
                                                <div className="flex-fill d-flex align-items-center">
                                                    <img src="/assets/img/user/user-3.jpg" alt="" width="16" className="rounded-circle me-2" />Richard Leong
                                                </div>
                                                <a href="#" className="ms-auto">Show ...</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-reminder-item">
                                        <div className="widget-reminder-time">14:22</div>
                                        <div className="widget-reminder-divider bg-primary"></div>
                                        <div className="widget-reminder-content">
                                            <div className="fs-13px">Updated by</div>
                                            <div className="d-flex align-items-center mt-1">
                                                <div className="flex-fill d-flex align-items-center">
                                                    <img src="/assets/img/user/user-3.jpg" alt="" width="16" className="rounded-circle me-2" />Richard Leong
                                                </div>
                                                <a href="#" className="ms-auto">Show ...</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-header fw-600">2 days ago, Nov 2</div>
                                    <div className="widget-reminder-item">
                                        <div className="widget-reminder-time">17:01</div>
                                        <div className="widget-reminder-divider bg-primary"></div>
                                        <div className="widget-reminder-content">
                                            <div className="fs-13px">Updated by</div>
                                            <div className="d-flex align-items-center mt-1">
                                                <div className="flex-fill d-flex align-items-center">
                                                    <img src="/assets/img/user/user-1.jpg" alt="" width="16" className="rounded-circle me-2" />Evelyn Rodick
                                                </div>
                                                <a href="#" className="ms-auto">Show ...</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-reminder-item">
                                        <div className="widget-reminder-time">08:31</div>
                                        <div className="widget-reminder-divider bg-success"></div>
                                        <div className="widget-reminder-content">
                                            <div className="fs-13px">Created by</div>
                                            <div className="d-flex align-items-center mt-1">
                                                <div className="flex-fill d-flex align-items-center">
                                                    <img src="/assets/img/user/user-3.jpg" alt="" width="16" className="rounded-circle me-2" />Richard Leong
                                                </div>
                                                <a href="#" className="ms-auto">Show ...</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-reminder-item">
                                        <div className="widget-reminder-time">20:00<br />23:00</div>
                                        <div className="widget-reminder-divider bg-primary"></div>
                                        <div className="widget-reminder-content">
                                            <div className="fw-600">Dinner with Richard</div>
                                            <div className="fs-13px">Tom's Too Restaurant</div>
                                            <div className="d-flex align-items-center fs-13px mt-2">
                                                <div className="flex-fill d-flex align-items-center">
                                                    <img src="/assets/img/user/user-3.jpg" alt="" width="16" className="rounded-circle me-2" /> Richard Leong
                                                </div>
                                                <a href="#" className="ms-auto">More details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="d-grid m-2  justify-content-md-center">
                                    <button type="button" className="btn btn-secondary btn-sm">Show all</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default PeopleDetails

