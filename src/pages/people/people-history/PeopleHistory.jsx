import React from 'react'

import PeopleHistoryCard from './PeopleHistoryCard';

const PeopleHistory = () => {

    return (
        <div className="col-lg-8 col-xl-4 col-xxl-3">
            <div className="navbar navbar-sticky d-block px-4">

                <div className="d-flex align-items-center">
                    <h4 className="xpage-header">
                        Activity
                    </h4>
                    <a href="#" className="ms-auto text-muted p-2">Show all activities</a>
                </div>

                <PeopleHistoryCard />


                <div className="d-grid m-2  justify-content-md-center">
                    <button type="button" className="btn btn-secondary btn-sm">Show all</button>
                </div>
            </div>
        </div>
    )
}

export default PeopleHistory