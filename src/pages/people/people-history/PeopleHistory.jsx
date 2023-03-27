import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import PeopleHistoryCard from './PeopleHistoryCard';
import { useHistoryUserDetails } from '../../../hooks/usePeople';

const PeopleHistory = ({ onShow, onDataSave }) => {
    const { id } = useParams();
    const [showAllActivities, setShowAllActivities] = useState("")
    const showAllHandler = () => setShowAllActivities(!showAllActivities);
    const { data: historyDetails, refetch } = useHistoryUserDetails(id);

    useEffect(() => {
        setTimeout(() => {
            refetch()
        }, 1000);
        console.log("People HISTORY RENDER use effect")
    }
        , [onDataSave])

    return (
        <div className="col-lg-8 col-xl-4 col-xxl-3">
            <div className="navbar navbar-sticky d-block px-4">

                <div className="d-flex align-items-center">
                    <h4 className="xpage-header">
                        Activity
                    </h4>
                    <a className="btn ms-auto text-muted p-2" onClick={showAllHandler}>{showAllActivities ? "Show less" : "Show all activities"}</a>
                </div>

                <PeopleHistoryCard showAll={showAllActivities} historyDetails={historyDetails} onShowForm={onShow} />

                <div className="d-grid m-2  justify-content-md-center">
                    <button type="button" className="btn btn-secondary btn-sm" onClick={showAllHandler}>{showAllActivities ? "Show less" : "Show all activities"}</button>
                </div>
            </div>
        </div>
    )
}

export default PeopleHistory