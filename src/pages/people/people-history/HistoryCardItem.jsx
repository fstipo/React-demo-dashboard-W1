import React from 'react'
import { useParams } from 'react-router-dom';
import { useHistoryUserDetails } from "../../../hooks/usePeople"


const HistoryCardItem = ({ time }) => {
    const { id } = useParams();
    const { data: historyDetails } = useHistoryUserDetails(id);

    console.log(historyDetails);
    historyDetails?.map(item => console.log(item.changedAt))

    return (
        <div className="widget-reminder-item">
            <div className="widget-reminder-time">{time}</div>
            <div className="widget-reminder-divider bg-success"></div>
            <div className="widget-reminder-content">
                <div className="fs-13px">Created by</div>
                <div className="d-flex align-items-center mt-1">
                    <div className="flex-fill d-flex align-items-center">
                        <img src="/assets/img/user/user-3.jpg" alt="" width="16" className="rounded-circle me-2" />Franko Stipanov
                    </div>
                    <a href="#" className="ms-auto">Show ...</a>
                </div>
            </div>
        </div>
    )
}

export default HistoryCardItem