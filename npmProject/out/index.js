"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var _ = __importStar(require("lodash"));
var foo = new Person_1.Person();
foo.firstName = "Test";
foo.lastName = "LastName";
console.log(foo);
var array = [1, 2, 3, 4, 5];
// Type defination or define type
// cmd: npm install @types/lodash --save-dev
console.log(array);
_.reverse(array);
console.log(array);
