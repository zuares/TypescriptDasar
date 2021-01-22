
//1. String
let nama: string = "Arief Muhamad";
//2. Number
let umur : number ;
umur = 25
//3. Boolean
let isMarried :boolean;
isMarried = true;
//4. Any
let heroes:any = "Iron Man";
heroes = 23;
heroes = [];
heroes = {};
heroes = true || false || "string";
//5. Array
let array:number[];
array = [1,2,3];
let array2 :string[];
array2 = ["string"];
let array3:any[];
array3 = ["string", 1, true];
//6. Tupples
// Adlh array yang bisa isi nya berbagai tipe data tapi isi nya terbatas 
let biodata: [string, number];
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
enum Month{
    jan = "January" ,
    feb = "February",
    mar ="March",
    apr = "April",
    mei = "May" // Kalo kosong error
}

//  8. Union type

let phone : number | string;
phone = 628123455;
phone = "628123455";
console.log(phone)
