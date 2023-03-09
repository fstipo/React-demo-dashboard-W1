import React from 'react'
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
            edit: "updated"
        }
    });

    const activityList = newHistoryDetails?.map((item, index, arr) => {
        const fullDate = item.changedAt;
        const time = activityTime(fullDate);
        const pastTime = activityDay(fullDate);
        const date = activityDate(fullDate);


        // get the first item of the same date and set showDate to true
        const [firstItem, ...restItems] = newHistoryDetails?.filter((item) => date === activityDate(item.changedAt));
        firstItem.showDate = true;
        restItems.map((item) => item.showDate = false);
        let delIndex = 0;
        if (item.deletedAt !== null) {
            delIndex = index;
            item.edit = "deleted"
        }
        if (delIndex !== 0) {
            console.log(delIndex - 1)
            // item.edit = "created"
            arr.at(delIndex - 1).edit = "created"
        }
        arr.at(-1).edit = "created";

        return <HistoryCardItem time={time} pastTime={pastTime} date={date} showDate={item.showDate} edit={item.edit} />
    })

    return (
        <div className="card">
            {activityList}
        </div >
    )
}

export default PeopleHistoryCard