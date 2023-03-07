import React from 'react'
import { useParams } from 'react-router-dom';
import { todayDate, pastTimeFromToday } from "../../../utils/utils"
import { useHistoryUserDetails } from "../../../hooks/usePeople"
import HistoryCardItem from './HistoryCardItem';


const PeopleHistoryCard = () => {
    const { id } = useParams();
    const { data: historyDetails } = useHistoryUserDetails(id);
    const day = historyDetails?.map(item => item.changedAt)
    const today = todayDate(day?.at(0));
    const pastTime = pastTimeFromToday(day?.at(0));

    console.log(`First Item: ${day?.at(0)}`);



    return (
        <div className="card">
            {/* <div className="card-header fw-600">Today, Nov 4</div> */}
            <div className="card-header fw-600">{pastTime}, {today}</div>
            <div className="widget-reminder">

                <HistoryCardItem />


                <div className="widget-reminder-item">
                    <div className="widget-reminder-time">14:22</div>
                    <div className="widget-reminder-divider bg-primary"></div>
                    <div className="widget-reminder-content">
                        <div className="fs-13px">Updated by</div>
                        <div className="d-flex align-items-center mt-1">
                            <div className="flex-fill d-flex align-items-center">
                                <img src="/assets/img/user/user-3.jpg" alt="" width="16" className="rounded-circle me-2" />Richard Leong
                            </div>
                            <a href="#" className="ms-auto">Show ...</a>
                        </div>
                    </div>
                </div>


                <div className="card-header fw-600">2 days ago, Nov 2</div>
                <div className="widget-reminder-item">
                    <div className="widget-reminder-time">17:01</div>
                    <div className="widget-reminder-divider bg-primary"></div>
                    <div className="widget-reminder-content">
                        <div className="fs-13px">Updated by</div>
                        <div className="d-flex align-items-center mt-1">
                            <div className="flex-fill d-flex align-items-center">
                                <img src="/assets/img/user/user-1.jpg" alt="" width="16" className="rounded-circle me-2" />Evelyn Rodick
                            </div>
                            <a href="#" className="ms-auto">Show ...</a>
                        </div>
                    </div>
                </div>
                <div className="widget-reminder-item">
                    <div className="widget-reminder-time">08:31</div>
                    <div className="widget-reminder-divider bg-success"></div>
                    <div className="widget-reminder-content">
                        <div className="fs-13px">Created by</div>
                        <div className="d-flex align-items-center mt-1">
                            <div className="flex-fill d-flex align-items-center">
                                <img src="/assets/img/user/user-3.jpg" alt="" width="16" className="rounded-circle me-2" />Richard Leong
                            </div>
                            <a href="#" className="ms-auto">Show ...</a>
                        </div>
                    </div>
                </div>
                <div className="widget-reminder-item">
                    <div className="widget-reminder-time">20:00<br />23:00</div>
                    <div className="widget-reminder-divider bg-primary"></div>
                    <div className="widget-reminder-content">
                        <div className="fw-600">Dinner with Richard</div>
                        <div className="fs-13px">Tom's Too Restaurant</div>
                        <div className="d-flex align-items-center fs-13px mt-2">
                            <div className="flex-fill d-flex align-items-center">
                                <img src="/assets/img/user/user-3.jpg" alt="" width="16" className="rounded-circle me-2" /> Richard Leong
                            </div>
                            <a href="#" className="ms-auto">More details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PeopleHistoryCard