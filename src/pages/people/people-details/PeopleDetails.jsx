import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import PeopleHistory from '../people-history/PeopleHistory';
import PeopleUserDetails from './PeopleUserDetails';
import PeopleHistoryDetails from "../people-history/PeopleHistoryDetails"

const PeopleDetails = () => {
    const [historyForm, setHistoryForm] = useState(false);
    const [historyRecord, setHistoryRecord] = useState("");
    const [isSaved, setIsSaved] = useState(false);

    const showHistoryFormHandler = (data) => {
        setHistoryRecord(data);
        setHistoryForm(true);
    };
    const saveHandler = () => {
        setIsSaved(!isSaved)
    };

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
                    {!historyForm && < PeopleUserDetails onSave={saveHandler} />}
                    {historyForm && <PeopleHistoryDetails historyRecord={historyRecord} />}
                    <div className="col-xl-1 col-xxl-4"></div>
                    <PeopleHistory onDataSave={isSaved} onShow={showHistoryFormHandler} />
                </div>
            </div>
        </div >
    )
}

export default PeopleDetails

