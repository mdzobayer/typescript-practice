class Animal {
    protected category: string;
    protected name: string;
}

class Cat extends Animal {
    
    constructor(name: string) {
        super();
        this.category = "Zoology";
        this.name = name
    }

    getCategory() :string {
        return this.category;
    }

    getName() : string {
        return this.name;
    }
}

class Mango extends Animal {
    constructor(name: string) {
        super();
        this.category = "Botany";
        this.name = name;
    }

    getCategory() :string {
        return this.category;
    }

    getName() : string {
        return this.name;
    }

}

interface anAnimal {
    getCategory() :string;
    getName() :string;
}

let aCat: Cat = new Cat("Bitu");

let intfaceAnimal: anAnimal;

intfaceAnimal = aCat;

console.log(intfaceAnimal.getCategory());
console.log(intfaceAnimal.getName());
