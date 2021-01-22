"use strict";
//1. String
var nama = "Arief Muhamad";
//2. Number
var umur;
umur = 25;
//3. Boolean
var isMarried;
isMarried = true;
//4. Any
var heroes = "Iron Man";
heroes = 23;
heroes = [];
heroes = {};
heroes = true || false || "string";
//5. Array
var array;
array = [1, 2, 3];
var array2;
array2 = ["string"];
var array3;
array3 = ["string", 1, true];
//6. Tupples
// Adlh array yang bisa isi nya berbagai tipe data tapi isi nya terbatas 
var biodata;
biodata = ["Bandung", 12301];
// biodata = [123, "Bandung"];  //error
// biodata = ["Jakarta", 123, false]; // error
//7. Enum
// Sekumpulan tipe data yang isinya data konstant
// Menyimpan data konstan di level aplikasi
// enum Month{
//     jan = 1 ,
//     feb = 100,
//     mar,
//     apr,
//     mei
// }
// console.log(Month);
//  7.1 String enum
var Month;
(function (Month) {
    Month["jan"] = "January";
    Month["feb"] = "February";
    Month["mar"] = "March";
    Month["apr"] = "April";
    Month["mei"] = "May"; // Kalo kosong error
})(Month || (Month = {}));
//  8. Union type
var phone;
phone = 628123455;
phone = "628123455";
console.log(phone);
