import React from 'react'
// // import { useLoaderData } from 'react-router-dom'
import PeopleRow from './PeopleRow';

// TABLE
// import React, { useState, useRef, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';

const PeopleAll = () => {
    // const people = useLoaderData();

    return (


        <table className="table table-hover text-nowrap">
            <thead>
                <tr>
                    <th className="pt-0 pb-2"></th>
                    <th className="pt-0 pb-2">id</th>
                    <th className="pt-0 pb-2">Name</th>
                    <th className="pt-0 pb-2">Date</th>
                    <th className="pt-0 pb-2">Sector</th>
                </tr>
            </thead>
            <tbody>
                {/* {people.map(user => <PeopleRow id={user.id} name={user.name} date={user.date} sector={user.sector} />)
                } */}

            </tbody>
        </table>)
}


export default PeopleAll




