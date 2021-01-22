
export class User {
    name : string;

    constructor(name: string, public age:number) {
        this.name = name;
    }

    setName(value: string):void {
        this.name = value;
    }

    getName = ():string => {
        return this.name;
    }

}

// Inheritance
// class Admin extends User {
//     read: boolean = true;
//     write: boolean = true;

//     getRole(): { read : boolean, write: boolean } {
//         return {
//             read : this.read,
//             write : this.write
//         }
//     }
// }

// let admin = new Admin("Arief", 24);

// Overide

// class Admin extends User {
//     read: boolean = true;
//     write: boolean = true;
//     phone : string;
    
//     constructor(name:string, age:number, phone : string) {
//         super(name, age);
//         this.phone = phone;
//     }

//     getRole(): { read : boolean, write: boolean } {
//         return {
//             read : this.read,
//             write : this.write
//         }
//     }
// }

// let admin = new Admin( "Arief", 24, "081")

// console.log(admin)


// Setter dan getter

// class Admin extends User {
//     read: boolean = true;
//     write: boolean = true;
//     phone : string;
//     private _email : string = "";
    
//     constructor(name:string, age:number, phone : string) {
//         super(name, age);
//         this.phone = phone;
//     }

//     getRole(): { read : boolean, write: boolean } {
//         return {
//             read : this.read,
//             write : this.write
//         }
//     }

//     set email(value:string) {
//         if(value.length < 5 ) {
//             this.email = "Email salah"
//         }else {
//             this._email = value;
//         }
//     }

//     get email():string {
//         return this._email;
//     }


// }

// let admin = new Admin("Arief", 24, "089656");

// admin.email = "Zuaresquad@gmail.com";


// console.log(admin.email);

// Static Property dan method

// class Admin extends User {
//     read: boolean = true;
//     write: boolean = true;
//     phone : string;
//     private _email : string = "";
//     static getRoleName: string = "Admin";
    
    
//     constructor(name:string, age:number, phone : string) {
//         super(name, age);
//         this.phone = phone;
//     }

//     static getNameRole() {
//         return "hei";
//     }

//     getRole(): { read : boolean, write: boolean } {
//         return {
//             read : this.read,
//             write : this.write
//         }
//     }

//     set email(value:string) {
//         if(value.length < 5 ) {
//             this.email = "Email salah"
//         }else {
//             this._email = value;
//         }
//     }

//     get email():string {
//         return this._email;
//     }


// }

// let admin = Admin.getNameRole;
// console.log(admin())
