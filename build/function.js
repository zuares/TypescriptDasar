"use strict";
// Tipe data pada balikan function
function getName() {
    return "Hello my name is Arief muhamad";
}
function getAge() {
    return 18;
}
function printName() {
    console.log("Print name");
}
//  Argument function type
function multiply(val1, val2) {
    return val1 * val2;
}
var result = multiply(2, 5);
var age = 3;
var Add = function (a, b) {
    return a + b;
};
//  Default param type
var fullName = function (first, last) {
    if (last === void 0) { last = "Hidayat"; }
    return first + last;
};
//  Optional parameter 
var getUmur = function (a, b) {
    return a + " " + b;
};
console.log(getUmur(12));
