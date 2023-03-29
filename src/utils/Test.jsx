import React, { useState } from 'react'
import moment from 'moment'
import ReactDatePicker from 'react-datepicker';
import { usePeopleHistoryInMoment } from '../hooks/usePeople';

const dateFormat = (date) => moment(date).format('DD.MM.YYYY, h:mm:ss A');

const Test = () => {
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
                            setDate(date);
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
            </div>
            <div>
                <h1>Moment.js Test</h1>
                <hr />

                <div className='h3'>{`React Picker: ${date}`}</div>
                {date && <div className='h3'>{`Iso String: ${dateISO}`}</div>}
                <hr />


                {date && <div className='h3'>{`My Format: ${dateFormat(dateISO)}`}</div>}
                <hr />
                <div className='h4'>People created at that time: {peopleInMoment?.length}</div>
                <p>14.07.2022 = 1</p>
                <p>16.07.2022 = 4</p>
                <p>19.07.2022 = 14</p>
                <p>01.08.2022 = 96</p>
                <p>19.02.2023 = 166</p>
            </div>
        </>
    )
}

export default Test

