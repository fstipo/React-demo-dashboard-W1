import moment from "moment";

// RANDOM KEY
export const randomKey = () => {
    return new Date().getTime() + Math.random() * 254425;
}

// DATE FORMAT - from date Picker to normal date
export const dateFormat = (date) => moment(date).format('DD.MM.YYYY, H:mm:ss');


// Today's date
// export const todayDate = () => moment().format('DD.MM.YYYY, h:mm:ss A');
// export const todayDate = () => moment().format('MMM DD');
export const activityTime = (date) => moment(date).format('H:mm');
export const activityDay = (date) => moment(date).calendar({
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: 'DD/MM/YYYY'
});
export const activityDate = (date) => moment(date).format('MMM DD');


// more examples of date format here: https://momentjs.com/docs/#/displaying/