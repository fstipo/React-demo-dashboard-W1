import moment from "moment";

// RANDOM KEY
export const randomKey = () => {
    return new Date().getTime() + Math.random() * 254425;
}

// DATE FORMAT - from date Picker to normal date
export const dateFormat = (date) => moment(date).format('DD.MM.YYYY, H:mm:ss');

// Today's date
export const activityTime = (date) => moment(date).format('H:mm');
export const activityDay = (date) => moment(date).calendar({
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: 'DD. MMM. YYYY'
});
export const activityDate = (date) => moment(date).format('MMM DD');

// capitalize first letter
export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// format breadCrumbLink
export const formatBreadCrumbLink = (item, str) => {
    const hasMoreWords = item.split(' ').length;
    item = item.toLowerCase() + '/';
    if (item === 'home/') {
        return (str = '/');
    }
    if (hasMoreWords > 1) {
        str += item.split(' ').join('-');
        return str.slice(0, -1);
    }
    str += item;
    return str.slice(0, -1)
};