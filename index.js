function returnFirstTwoDrivers(drivers) {
    const func = function() {
        return [drivers[0], drivers[1]];
    };
    return func();
}

function returnLastTwoDrivers(drivers) {
    const func = function() {
        return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
    };
    return func(); 
}

let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
}