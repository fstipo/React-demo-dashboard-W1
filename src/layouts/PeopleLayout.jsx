import { Link, Outlet, useNavigate } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb';

const PeopleLayout = () => {
    const navigate = useNavigate();
    return (
        <div id="content" className="app-content">
            <Breadcrumb />

            <div className='d-flex align-items-center'>
                <a className="btn btn-default" onClick={() => navigate("/")}>
                    <i className="fa fa-chevron-left fa-fw ms-n1"></i>
                    Back
                </a>
                <div className="ms-auto">
                    <Link to="add-user" className="btn bg-theme text-white"
                    ><i className="fa fa-user-plus fa-fw me-1"></i>Add User</Link>
                </div>

            </div>
            <hr />
            < div className="card" >
                <ul className="nav nav-tabs nav-tabs-v2 px-4" >
                    <li className="nav-item me-3">
                        <button className="nav-link active px-2" data-bs-toggle="tab" to="people" onClick={() => navigate("/people")}>All</button>
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




