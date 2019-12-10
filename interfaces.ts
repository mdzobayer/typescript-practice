interface Persons {
    firstName: string;
    lastName: string;

    getFullName() :string;
}

class Foo implements Persons {
    firstName: string;    lastName: string;
    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

let aPersons: Persons = new Foo();
let anPersons: Persons;

let someObj = {
    firstName: "Test",
    lastName: "Test",
    foo: 10,
    //getFullName: () => "Test"
    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
};

aPersons = someObj;

anPersons = someObj;

console.log(anPersons.getFullName());

