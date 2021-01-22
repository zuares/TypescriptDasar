
function getData(value : any) {
    return value;
}

// console.log(getData("123").length)
// console.log(getData(123).length) // undefined

// Generic
function myData<T>(value: T) {
    return value;
}

// console.log(myData("123").length)
// console.log(myData(123).length) // undefined
// console.log(myData(123)) // 123

// Generic arrow fn

const arrFun = <T> (value: T) => {
    return value
}

