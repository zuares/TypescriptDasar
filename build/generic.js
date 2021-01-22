"use strict";
function getData(value) {
    return value;
}
// console.log(getData("123").length)
// console.log(getData(123).length) // undefined
// Generic
function myData(value) {
    return value;
}
// console.log(myData("123").length)
// console.log(myData(123).length) // undefined
// console.log(myData(123)) // 123
// Generic arrow fn
var arrFun = function (value) {
    return value;
};
