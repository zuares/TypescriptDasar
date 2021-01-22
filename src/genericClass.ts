
class List<T> {
    private data : T[];

    constructor(...elements: T[]) {
        this.data = elements;
    }

    add(element : T) :void {
        this.data.push(element);
    }

    addMultiple(...elements: T[] ) : void {
        this.data.push(...elements);
    }

    getAll(): T[] {
        return this.data;
    }

}

// const numbers = new List<number>(1,2,3,4);
// numbers.add(123)
// numbers.addMultiple(7,8,9)
// console.log(numbers.getAll())

let random = new List<number | string>(1,"dua",3);
random.add("satu")
console.log(random.getAll())