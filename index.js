// Code your solution in this file!

const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);

const returnLastTwoDrivers = drivers => drivers.slice(-2);

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = num => fare => num * fare;

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, func) => func(drivers);

// const selectDifferentDrivers = function (drivers, func) {
//     return func(drivers);
// };