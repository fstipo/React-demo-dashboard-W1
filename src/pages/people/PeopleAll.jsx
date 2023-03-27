import TableHeader from "../../layouts/components/table/TableHeader"
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from "ag-grid-react";
import { useRef, useMemo } from "react";
import { ThreeDots } from "react-loader-spinner"

const headerLabels = ["", "ID", "Full Name", "Sector", "Changed At", "Original Revision"];

const columnDefs = [

    { headerName: "ID", field: 'id' },
    { headerName: "Full Name", field: 'name' },
    { headerName: "Sector", field: 'sector' },
    { headerName: "Date Changed", field: 'changedAt' },
    { headerName: "Original Revision", field: 'originalRevision' },
];

import { usePeopleData } from "../../hooks/usePeople";
import { randomKey } from "../../utils/utils";


const PeopleAll = () => {
    const gridRef = useRef(null);
    const navigate = useNavigate();
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
    };
    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true,
        resizable: true,

    }), [])

    console?.log(people)
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
            height: '500px'
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
            {/* <table className="table table-hover text-nowrap ">
                <TableHeader headerLabels={headerLabels} />
                <tbody>

                    {people?.map(item => <tr key={randomKey()} onClick={rowSelectedHandler}>
                        <td className="align-middle">{ }</td><td className="align-middle">{item.id}</td><td className="align-middle">{item.name}</td><td className="align-middle">{item.sector}</td>
                        <td className="align-middle">{item.changedAt}</td>
                        <td className="align-middle">{item.originalRevision
                        }</td>
                    </tr>)}
                </tbody>
            </table> */}
        </div >
    )
}


export default PeopleAll




