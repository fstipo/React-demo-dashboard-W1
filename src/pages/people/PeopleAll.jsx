import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from "ag-grid-react";
import { useRef, useMemo } from "react";
import { ThreeDots } from "react-loader-spinner"

const columnDefs = [

    { headerName: "ID", field: 'id' },
    { headerName: "Full Name", field: 'name' },
    { headerName: "Sector", field: 'sector' },
    { headerName: "Date Changed", field: 'changedAt' },
    { headerName: "Original Revision", field: 'originalRevision' },
];

import { usePeopleData } from "../../hooks/usePeople";

const PeopleAll = () => {
    const gridRef = useRef(null);
    const navigate = useNavigate();
    // Pagination



    const onError = () => <div className='display-1'>Error</div>
    const {
        isLoading,
        data: people,
        error,
        isError,
    } = usePeopleData(onError);

    const rowSelectedHandler = useCallback((event) => {
        const selectedUserId = event.target.parentNode.childNodes[1].textContent;
        navigate(`/people/person-details/${selectedUserId}`);
    }, []);

    const onRowSelected = useCallback((event) => {
        const selectedUserId = event.node.data.id;
        navigate(`/people/person-details/${selectedUserId}`);
    }, []);

    const gridOptions = {
        pagination: true,
        paginationAutoPageSize: true,
        paginationPageSize: 10
    };
    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true,
        resizable: true,

    }), [])

    if (isLoading) {
        return <span className='mx-5'><ThreeDots height={30}
            color="#ccc"
            ariaLabel="three-dots-loading" /></span>
    }

    if (isError) {
        return <span className="ms-5 fw-bold">{error.message}</span>
    }

    return (

        <div className=" ag-theme-alpine" style={{
            width: '100%',
        }} >
            <AgGridReact
                domLayout={'autoHeight'}
                rowClass={'full-width-row'}
                gridAutoWidth={true}
                ref={gridRef}
                rowData={people}
                columnDefs={columnDefs}
                gridOptions={gridOptions}
                rowSelection="single"
                animateRows="true"
                defaultColDef={defaultColDef}
                onClick={rowSelectedHandler}
                onRowSelected={onRowSelected}

            ></AgGridReact>
        </div >
    )
}


export default PeopleAll




