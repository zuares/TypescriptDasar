"use strict";
var Asus = /** @class */ (function () {
    function Asus(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    Asus.prototype.on = function () {
        console.log("Nyala");
    };
    Asus.prototype.off = function () {
        console.log("Mati");
    };
    return Asus;
}());
var MacBook = /** @class */ (function () {
    function MacBook(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    MacBook.prototype.on = function () {
        console.log("Nyala");
    };
    MacBook.prototype.off = function () {
        console.log("Mati");
    };
    return MacBook;
}());
// let asus = new Asus("Asus ROG", true);
// asus.on();
// asus.off();
var mac = new Asus("Apple", true);
mac.on();
mac.off();
