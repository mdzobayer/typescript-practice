 var fn = () => 'response';
// Both are same 
// var fn = function() {
//     return 'response'
// }

var a: number;
var b: boolean;
var c: string;
var foo = undefined;
var bar = null;

a = 10;
b = true;
c = "Hello";

var myArr : number [];
//var myArr = [1,2,3]; 

myArr = [1,3,4,5];
myArr.push(9); 

var i: number;

for (i = 0; i < myArr.length; ++i) {
    console.log(myArr[i]);
    //console.log("\n");
}

// tuple
//var myArra : [number, boolean] = [1,true];

var myArra : [number, boolean];
myArra = [1, true];

a = 10;
b = true;
c = "Hello";

function add(a: number, b: number, c?:number, d = 0, e?: number ) : number {

    if (c == undefined) {
        return a + b;
    }
    // else if (d == undefined) {
    //     return a + b + c;
    // }

    return a + b + c + d;
}

var sum = add(1, 2, 3, 4);
console.log(sum);

add(1, 2, 3);

// Any type
var y: any;

// Union type
var x : number | boolean;
x = 10;
x = true;

y = 10;
y = "Str";
y = true;