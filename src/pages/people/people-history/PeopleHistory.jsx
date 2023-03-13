import React, { useState } from 'react'

import PeopleHistoryCard from './PeopleHistoryCard';

const PeopleHistory = ({ onShow }) => {

    const [showAllActivities, setShowAllActivities] = useState("")
    const showAllHandler = () => setShowAllActivities(!showAllActivities)

    return (
        <div className="col-lg-8 col-xl-4 col-xxl-3">
            <div className="navbar navbar-sticky d-block px-4">

                <div className="d-flex align-items-center">
                    <h4 className="xpage-header">
                        Activity
                    </h4>
                    <a className="btn ms-auto text-muted p-2" onClick={showAllHandler}>{showAllActivities ? "Show less" : "Show all activities"}</a>
                </div>

                <PeopleHistoryCard showAll={showAllActivities} onShowForm={onShow} />


                <div className="d-grid m-2  justify-content-md-center">
                    <button type="button" className="btn btn-secondary btn-sm" onClick={showAllHandler}>{showAllActivities ? "Show less" : "Show all activities"}</button>
                </div>
            </div>
        </div>
    )
}

export default PeopleHistory