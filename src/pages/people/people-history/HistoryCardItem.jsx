import React from 'react'

const HistoryCardItem = ({ time, pastTime, showDate, itemState, onClick, id }) => {

    let labelColor = "bg-primary"
    let labelText = "Updated by"

    if (itemState === "created") {
        labelColor = "bg-success"
        labelText = "Created by"
    } else if (itemState === "updated") {
        labelColor = "bg-primary"
        labelText = "Updated by"
    } else if (itemState === "deleted") {
        labelColor = "bg-danger"
        labelText = "Deleted by"
    }

    return (
        <>
            {showDate && <div className="card-header fw-600">{pastTime}</div>}
            <div id={id} href="#" className="historyItem widget-reminder" onClick={onClick} data-click="scroll-top">
                <div className="widget-reminder-item "  >
                    <div className="widget-reminder-time">{time}</div>
                    <div className={`widget-reminder-divider ${labelColor}`}></div>
                    <div className="widget-reminder-content">
                        <div className="fs-13px">{labelText}</div>
                        <div className="d-flex align-items-center mt-1">
                            <div className="flex-fill d-flex align-items-center">
                                <img src="/assets/img/user/user-3.jpg" alt="" width="16" className="rounded-circle me-2" />Franko Stipanov
                            </div>
                        </div>
                    </div>
                </div >
            </div>

        </>


    )
}

export default HistoryCardItem


    // < a href = "#" data - click="scroll-top" className = "btn-scroll-top " >
    //     <i className="fa fa-arrow-up"></i>
    //         </ >