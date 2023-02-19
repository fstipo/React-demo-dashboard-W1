import React, { useState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import TableHeader from "../../layouts/components/table/TableHeader"
import { usePeopleHistoryInMoment } from "../../hooks/usePeople";
import { randomKey } from "../../utils/utils";
const headerLabels = ["", "ID", "Full Name", "Sector", "Changed At", "Original Revision"];

const PeopleInMoment = () => {

    const [date, setDate] = useState("");
    const [dateISO, setDateISO] = useState("");

    const onError = () => <div className='display-1'>Error</div>
    const {
        isLoading,
        data: peopleInMoment,
        error,
        isError,
        refetch,


    } = usePeopleHistoryInMoment(onError, dateISO);

    return (
        <>
            <div className='text-start justify-content-start align-items-center ms-2 mb-2 d-flex   '>
                <div className="rounded-3 border-0  p-2" >

                    <ReactDatePicker
                        className=" p-2 bg-secondary text-dark rounded-2 bg-opacity-10 fw-bold"

                        selected={date}
                        onChange={(date) => {
                            setDate(date)
                            setDateISO(date.toISOString())
                        }}
                        onCalendarClose={
                            refetch
                        }
                        showTimeSelect
                        dateFormat="d.MM.yyyy H:mm"
                        placeholderText=" Select date"
                        isClearable
                    />
                </div>
                <span>Number of data: {peopleInMoment.length} </span>
            </div>
            <div className="table-responsive">

                {peopleInMoment && <table className="table table-hover text-nowrap ">
                    <TableHeader headerLabels={headerLabels} />


                    <tbody>
                        {peopleInMoment?.map(item => <tr key={randomKey()}>
                            <td className="align-middle">{ }</td><td className="align-middle">{item.id}</td><td className="align-middle">{item.name}</td><td className="align-middle">{item.sector}</td>
                            <td className="align-middle">{item.changedAt}</td>
                            <td className="align-middle">{item.originalRevision
                            }</td>

                        </tr>)}
                    </tbody>
                </table>}
            </div>
        </>

    )
}


export default PeopleInMoment






