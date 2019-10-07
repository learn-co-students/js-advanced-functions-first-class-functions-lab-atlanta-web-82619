// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function (num){
    return function(num1) {
       return num * num1
    }
}

// const fareDoubler = function(num) {
//     return num * 2 ; 
// }

const fareDoubler = createFareMultiplier(2)



// const fareTripler = function(num) {
//     return num * 3 ; 
// }

const fareTripler = createFareMultiplier(3)


const selectDifferentDrivers = function(arrayOfDrivers,func) {
    return func(arrayOfDrivers) ; 
};
