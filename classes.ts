class Person {
    private firstName : string;
    private lastName : string;

    // constructor() {
    //     this.firstName = "";
    //     this.lastName = "";
    // }
    constructor(firstName: string, lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() :string {
        // return this.firstName + " " + this.lastName;
        return this.getFirstName() + " " + this.getLastName();
    }

    setFirstName(firstName:string) {
        this.firstName = firstName;
    }

    setLastName(lastName:string) {
        this.lastName = lastName;
    }

    getFirstName() : string {
        return this.firstName;
    }
    getLastName() : string {
        return this.lastName;
    }

    greet() {
        console.log("Hey there!");
    }
}

class Programmer extends Person {

    constructor() {
        super("Programmer", "Class");
    }

    greet() {
        console.log("Hello World!");
    }

    greetLikeNormalPeople() {
        super.greet();
    }
    greetLikeProgrammer() {
        this.greet();
    }
}

// var aPerson = new Person("Jhon", "Kabir");
var aPerson:Person = new Person("Jahir", "Raihan");

// Can't access private members
// aPerson.firstName = "Jhon";     
// aPerson.lastName = "Kabir";

// Use public methods
aPerson.setFirstName("John");
aPerson.setLastName("Kabir");

console.log(aPerson.getFullName());
// console.log(aPerson);

var aProgrammer = new Programmer();
var aProg: Person = new Programmer();


aProgrammer.greetLikeNormalPeople();
aProgrammer.greetLikeProgrammer();


aProg.greet();

console.log(aProg.getFullName());
