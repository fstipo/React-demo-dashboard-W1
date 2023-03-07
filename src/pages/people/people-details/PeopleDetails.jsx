import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useUserDetails } from '../../../hooks/usePeople';
// import UserForm from '../components/UserForm';
import PeopleHistory from '../people-history/PeopleHistory';
import PeopleUserDetails from './PeopleUserDetails';

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
                    <PeopleUserDetails />
                    <div className="col-xl-1 col-xxl-4"></div>
                    <PeopleHistory />
                </div>
            </div>
        </div >
    )
}

export default PeopleDetails

