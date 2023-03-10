import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { activityDate, activityDay, activityTime } from "../../../utils/utils"
import { useHistoryUserDetails } from "../../../hooks/usePeople"
import HistoryCardItem from './HistoryCardItem';


const PeopleHistoryCard = () => {
    const { id } = useParams();
    const { data: historyDetails } = useHistoryUserDetails(id);

    // add showDate and edit properties to each item
    const newHistoryDetails = historyDetails?.filter((item) => item.id !== item.entityId)?.map((item) => {
        return {
            ...item,
            showDate: false,
            itemState: "updated"
        }
    });

    if (!newHistoryDetails) return null;
    // newHistoryDetails[newHistoryDetails.length - 1].itemState = "created";
    newHistoryDetails.at(-1).itemState = "created";

    newHistoryDetails?.forEach((item, index) => {
        if (item.deletedAt !== null) {
            newHistoryDetails[index - 1].itemState = "created";
            item.itemState = "deleted";
        }
    })

    const activityList = newHistoryDetails?.map(item => {
        const fullDate = item.changedAt;
        const time = activityTime(fullDate);
        const pastTime = activityDay(fullDate);
        const date = activityDate(fullDate);


        // get the first item of the same date and set showDate to true
        const [firstItem, ...restItems] = newHistoryDetails?.filter((item) => date === activityDate(item.changedAt));
        firstItem.showDate = true;
        restItems.map((item) => item.showDate = false);



        return <HistoryCardItem time={time} pastTime={pastTime} date={date} showDate={item.showDate} itemState={item.itemState} />
    })

    return (
        <div className="card">
            {activityList}
        </div >
    )
}

export default PeopleHistoryCard