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

    const activityList = newHistoryDetails?.map((item, _, arr) => {
        const fullDate = item.changedAt;
        const time = activityTime(fullDate);
        const pastTime = activityDay(fullDate);
        const date = activityDate(fullDate);


        // get the first item of the same date and set showDate to true
        const [firstItem, ...restItems] = newHistoryDetails?.filter((item) => date === activityDate(item.changedAt));
        firstItem.showDate = true;
        restItems.map((item) => item.showDate = false);

        newHistoryDetails.forEach((item, index) => {
            if (item.deletedAt !== null) {
                arr[index - 1].edit = "created";
                item.edit = "deleted";
            }
            arr.at(-1).edit = "created";
        })

        return <HistoryCardItem time={time} pastTime={pastTime} date={date} showDate={item.showDate} edit={item.edit} />
    })

    return (
        <div className="card">
            {activityList}
        </div >
    )
}

export default PeopleHistoryCard