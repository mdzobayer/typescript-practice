import {Person} from './Person'
import * as _ from 'lodash';

let foo = new Person();
foo.firstName = "Test";

foo.lastName = "LastName";
console.log(foo);

var array = [1,2,3,4,5];

// Type defination or define type
// cmd: npm install lodash
// cmd: npm install @types/lodash --save-dev

console.log(array);
_.reverse(array);
console.log(array);