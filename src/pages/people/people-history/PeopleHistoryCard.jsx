import React from 'react'
import { useParams } from 'react-router-dom';
import { activityDate, activityDay, activityTime } from "../../../utils/utils"
import { useHistoryUserDetails } from "../../../hooks/usePeople"
import HistoryCardItem from './HistoryCardItem';


const PeopleHistoryCard = () => {
    const { id } = useParams();
    const { data: historyDetails } = useHistoryUserDetails(id);

    const activityList = historyDetails?.map(item => {
        const fullDate = item.changedAt;
        const time = activityTime(fullDate);
        const pastTime = activityDay(fullDate);
        const date = activityDate(fullDate);
        let showDate = false;
        showDate = historyDetails?.filter((item) => date === activityDate(item.changedAt));



        const sameDates = historyDetails?.filter((item) => date === activityDate(item.changedAt))
        // sameDates?.map((item) => item.at(0) ? showDate = true : showDate = false));
        // sameDates?.map((item, index) => console.log(item[0]))







        return <HistoryCardItem time={time} pastTime={pastTime} date={date} showDate={showDate} />
    })



    // console.log(dataList)

    // const data = dataList?.filter((item, index) => {
    //     if (index === 0) {
    //         return item
    //     } else if (activityDate(item.changedAt) !== activityDate(dataList[index - 1].changedAt)) {
    //         return item
    //     }
    // })

    // console.log(data)

    return (
        <div className="card">
            {activityList}
        </div >
    )
}

export default PeopleHistoryCard