import moment from "moment";

// RANDOM KEY
export const randomKey = () => {
    return new Date().getTime() + Math.random() * 254425;
}

// DATE FORMAT - from date Picker to normal date
export const dateFormat = (date) => moment(date).format('DD.MM.YYYY, h:mm:ss A');

// Today's date
// export const todayDate = () => moment().format('DD.MM.YYYY, h:mm:ss A');
export const todayDate = () => moment().format('MMM DD');