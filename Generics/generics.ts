import {Person} from './Person';
// Template functions no restriction
function echo<T>(arg: T): T {
    return arg;
}

var myStr: number = echo(1);



class Admin extends Person {

}

class Manager extends Person {

}

let admin = new Admin('a', 'a');
let manager = new Manager('a', 'a');

// Generic for all class who extends Person (with restriction)
function personEcho<T extends Person>(person: T) :T {
    return person;
}

var foo = personEcho(admin);
var bar = personEcho(manager);