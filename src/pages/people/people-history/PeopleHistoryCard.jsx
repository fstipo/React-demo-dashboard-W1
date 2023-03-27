import React from 'react';

import {
  activityDate,
  activityDay,
  activityTime,
  randomKey,
} from '../../../utils/utils';
import HistoryCardItem from './HistoryCardItem';


const PeopleHistoryCard = ({ showAll, onShowForm, historyDetails }) => {
  // add showDate and edit properties to each item
  const newHistoryDetails = historyDetails
    ?.filter((item) => item.id !== item.entityId)
    ?.map((item) => {
      return {
        ...item,
        showDate: false,
        itemState: 'updated',
      }

    })

  // If the fetch data is null or undefined, return null
  if (!newHistoryDetails) return null

  // newHistoryDetails[newHistoryDetails.length - 1].itemState = "created";
  newHistoryDetails.at(-1).itemState = 'created'

  newHistoryDetails?.forEach((item, index) => {
    if (item.deletedAt !== null) {
      newHistoryDetails[index - 1].itemState = 'created'
      item.itemState = 'deleted'
    }
  })

  const rowSelectedHandler = (e) => {
    const parentID = e.target.closest('.widget-reminder').id;
    const historyDetails = newHistoryDetails.filter(item => item.id === parentID).at(0);
    window.scrollTo(0, 0);
    onShowForm(historyDetails);
  }

  const activityList = newHistoryDetails?.map((item, _, arr) => {
    const fullDate = item.changedAt;
    const time = activityTime(fullDate);
    const pastTime = activityDay(fullDate);
    const date = activityDate(fullDate);

    //get the first item of the same date and set showDate to true
    const [firstItem, ...restItems] = newHistoryDetails?.filter(
      (item) => date === activityDate(item.changedAt)
    )
    firstItem.showDate = true;
    restItems.map((item) => (item.showDate = false));
    return (
      <HistoryCardItem
        id={item.id}
        key={randomKey()}
        time={time}
        pastTime={pastTime}
        date={date}
        showDate={item.showDate}
        itemState={item.itemState}
        onClick={rowSelectedHandler}
      />
    )
  })



  return (
    <div className="card">
      {showAll ? activityList : activityList.filter((_, index) => index < 5)}
    </div >
  )
}

export default PeopleHistoryCard


