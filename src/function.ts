
// Tipe data pada balikan function
function getName():string {
    return "Hello my name is Arief muhamad";
}

function getAge():number{
    return 18
}

function printName():void {
    console.log("Print name")
}

//  Argument function type
function multiply(val1:number, val2:number):number {
    return val1 * val2;
}

const result = multiply(2,5);

// Function sebahai tipe data

type Age = number;
let age : Age = 3;

type tambah = (val1:number, val2:number) => number;

const Add: tambah = (a, b) =>  {
    return a + b
}


//  Default param type
const fullName = (first : string, last:string = "Hidayat" ) : string => {
    return first + last;
}

//  Optional parameter 
const getUmur = (a:number, b?:number):string => { // ga boleh opsional di pake di number kecuali return nya string
    return a + " " +  b;
}

console.log(getUmur(12))