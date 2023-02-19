import React, { useState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import TableHeader from "../../layouts/components/table/TableHeader"
import { usePeopleHistoryInMoment } from "../../hooks/usePeople";
import { randomKey } from "../../utils/utils";
import { dateFormat } from "../../utils/utils"
const headerLabels = ["", "ID", "Full Name", "Sector", "Changed At", "Original Revision"];

const PeopleInMoment = () => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [date, setDate] = useState("");
    const [peopleInMoment, setPeopleInMoment] = useState("");

    // const [newData, setNewData] = useState("");

    const getDataHandler = () => {
        //  setNewData(getData(id, date.toISOString(), setNewData))
        console.log(date);
        refetch()
        console.log(people)

    };

    // useEffect(() => {

    //     setPeopleInMoment(people)
    // }, [])



    const onError = () => <div className='display-1'>Error</div>
    // const onSuccess = (people) => console.log(people);
    const {
        isLoading,
        data: people,
        error,
        isError,
        refetch,


    } = usePeopleHistoryInMoment(onError,);

    return (
        <>
            <div className='text-start justify-content-start align-items-center ms-2 mb-2 d-flex   '>
                <div className="rounded-3 border-0  p-2" >

                    <ReactDatePicker
                        className=" p-2 bg-secondary text-dark rounded-2 bg-opacity-10 fw-bold"

                        selected={date}
                        onChange={(date) => {
                            setDate(date)
                        }}
                        onCalendarClose={
                            getDataHandler
                        }
                        showTimeSelect
                        dateFormat="d.MM.yyyy H:mm"
                        placeholderText=" Select date"
                        isClearable
                    />
                </div>
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






