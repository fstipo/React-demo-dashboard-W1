import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import { useRef, useMemo } from "react";
import Loader from "../../layouts/components/Loader";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { toast } from 'react-toastify'

const columnDefs = [

    { headerName: "ID", field: 'id', width: 100 },
    { headerName: "Full Name", field: 'name', width: 250 },
    { headerName: "Sector", field: 'sector', width: 250 },
    { headerName: "Date Changed", field: 'changedAt', width: 250 },
    { headerName: "Original Revision", field: 'originalRevision', width: 1000 },
];

import { usePeopleData } from "../../hooks/usePeople";

const PeopleAll = () => {
    const gridRef = useRef(null);
    const navigate = useNavigate();

    const onError = () => <div className='display-1'>Unfortunately, the request was not successful due to a 404 error code returned by the server.</div>
    const {
        isLoading,
        data: people,
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
        paginationPageSize: 12,
        rowHeight: 40,
        domLayout: 'autoHeight',
        suppressHorizontalScroll: true,
    };
    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true,
        resizable: true,
    }), [])

    if (isLoading) {
        return <Loader />
    }

    if (isError) {
        toast.error("We apologize, but there appears to be a problem with the source. Please give it another try.", {
            toastId: 'success1',
        })
        return null;
    }

    return (


        <div className="ag-theme-alpine h-100" style={{
            width: '100%',
            // height: "900"
        }} >
            <AgGridReact
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




