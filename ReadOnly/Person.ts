class Person {
    readonly category: string;

    constructor(categoryName: string) {
        this.category = categoryName;
    }
}

var aPerson = new Person("Karim");
//aPerson.name = "";
console.log(aPerson.category);
