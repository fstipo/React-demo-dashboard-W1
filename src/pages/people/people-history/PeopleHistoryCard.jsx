import React from 'react'
import { useParams } from 'react-router-dom';
import { activityDate, activityDay, activityTime } from "../../../utils/utils"
import { useHistoryUserDetails } from "../../../hooks/usePeople"
import HistoryCardItem from './HistoryCardItem';


const PeopleHistoryCard = () => {
    const { id } = useParams();
    const { data: historyDetails } = useHistoryUserDetails(id);

    const newHistoryDetails = historyDetails?.filter((item) => item.id !== item.entityId)?.map((item) => {
        return {
            ...item,
            showDate: false,
            edit: "created"
        }
    });

    const activityList = newHistoryDetails?.map(item => {
        const fullDate = item.changedAt;
        const time = activityTime(fullDate);
        const pastTime = activityDay(fullDate);
        const date = activityDate(fullDate);

        // add showDate and edit properties to each item

        // get the first item of the same date and set showDate to true
        const [firstItem, ...restItems] = newHistoryDetails?.filter((item) => date === activityDate(item.changedAt));
        firstItem.showDate = true;
        restItems.map((item) => item.showDate = false);

        // edit delete
        const deletedItem = newHistoryDetails?.filter((item) => item.deletedAt !== null);
        deletedItem.map((item) => item.edit = "deleted");

        // edit update

        console.table(deletedItem)



        const removeFive = (arr) => {
            let index = arr.indexOf(deletedItem);
            console.log(index)
            while (index !== -1) {
                arr.splice(index, 2);
                index = arr.indexOf(deletedItem);
            }
            return arr;
        }

        console.log(removeFive(newHistoryDetails))



        return <HistoryCardItem time={time} pastTime={pastTime} date={date} showDate={item.showDate} edit={item.edit} />
    })


    return (
        <div className="card">
            {activityList}
            {/* {newHistoryDetails?.filter((item) => item.deletedAt !== 0)} */}
        </div >
    )
}

export default PeopleHistoryCard