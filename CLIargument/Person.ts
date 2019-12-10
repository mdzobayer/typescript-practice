class Person {
    firstName: string; 
    lastName: string;

    constructor() {
        this.firstName = "";
        this.lastName = "";
    }
}

let foo = new Person();
foo.firstName = "Test";
foo.lastName = "Test2";

// cmd: tsc Person.ts
// cmd: tsc Person.ts --out output-script.js
// cmd: tsc Person.ts --out output-script.js --watch