import moment from "moment";

export const randomKey = () => {
    return new Date().getTime() + Math.random() * 254425;
}

// export const dateFormat = (date) => moment(date).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");

// export const dateFormat = (date) => moment(date).format();
// // how to convert date 2023-02-18T18%3A41%3A19.851Z to 2023-02-18T18:41:19.851Z
// // export const dateFormat = (date) => {
// //     return date.replace(/%3A/g, ":");
// // }

// * DATE FORMAT - from date Picker to normal date
export const dateFormat = (date) => moment(date).format('DD.MM.YYYY, h:mm:ss A');