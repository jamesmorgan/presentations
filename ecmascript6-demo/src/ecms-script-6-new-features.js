"use strict";

/**
 * Object literals
 */
// Old school ECMAScript 5+ version
var home = "brazil";
var away = "holland";
var oldGame = {
    home: home,
    away: away
};
console.log(`Winners ${oldGame.away}`); // prints 'holland'

// New ECMAScript 6+ way
var newGame = { home, away }; // fields are given implicit values
console.log(`Losers ${newGame.home}`); // prints 'brazil'

/**
 * Default Params & String Template
 */
var helloWorld = function helloWorld(alterText = "Jimbob"){
    return `${alterText} says hello!`;
};

console.log(helloWorld());
console.log(helloWorld("Jammy"));

/**
 * Classes with inheritance - Holy Cow this cant be real!
 */
var c = new Bird("Red"); // Default arg on constructor
console.log(c.toString());

var d = new Dog("Black", "Medium");
console.log(d.toString());

var p = new Labrador("Brown", "Big");
console.log(p.toString());

/**
 * Numeric Literals
 */
var binary = [0b0, 0b1, 0b11];
console.log(`Binary: ${binary}`); // [0, 1, 3]);

var octal = [0o0, 0o1, 0o10, 0o77];
console.log(`Octal: ${octal}`); //([0, 1, 8, 63]);

/**
 * TODO not working correctly
 * Constants, scoping and the keyword "let"
 */
const changable = "Don't be stupid!";
{ // alter the scope

    changable = "this throws an error!";

    const UNCHANGEBALE = "Cant touch this!";
    UNCHANGEBALE = changable;

    console.log(UNCHANGEBALE);
}
// Throws error -> prevent variable leakage
//console.log(UNCHANGEBALE); // they follow the same scoping rule as normal JS

// Using let makes it easier to create correctly scoped closures and for loops
let a = "smalls";
{
    let a = "biggy";
    console.log(a); // prints out "biggy"
}
console.log(a); // prints out "smalls"

/**
 * Iterators - has changed a few times!
 * An iterator has a method called next. This method returns an object with two properties: value (any value) and done (will be read as a boolean).
 */
function makeIterator(array){
    var nextIndex = 0;

    return {
        next: function(){
            return nextIndex < array.length ?
                {value: array[nextIndex++], done: false} :
                {done: true};
        }
    }
}
var it = makeIterator(["angular", "js"]);
console.log(it.next().value); // "angular"
console.log(it.next().value); // "js"
console.log(it.next().done);  // true

/**
 * Generators and yields -> think of it a pauseable return
 */
function* count() {
    yield 1;
    yield 2;
    yield 3;
}
var counter = count();
console.log(counter.next()); // {value: 1, done: false}
console.log(counter.next()); // {value: 2, done: false}
console.log(counter.next()); // {value: 3, done: false}
console.log(counter.next()); // {value: undefined, done: true}

/**
 * Array Comprehension
 */
var numbers = [1.5, 6, 8.5, 12];
var doubled = [for (i of numbers) i * 2];
console.log(doubled); // prints 3,12,17,24

// Same as doing
var alternative = numbers.map(i => { return i * 2; });
console.log(alternative); // prints 3,12,17,24

/**
 * Array Filtering
 */
var evens = numbers.filter( i => {
    return i % 2 === 0;
});
console.log(evens); // prints 3,17

/**
 * Spreading -> allows combine multiple arrays more easily.
 */
var a1 = [1];
var b1 = [2, 3, 4];
var c1 = [6, 7];
var d1 = [0, ...a1, ...b1, 5, ...c1];
console.log(d1); // prints [0, 1, 2, 3, 4, 5, 6, 7]

// Current equivalent
var d2 = [0].concat(a1).concat(b1).concat([5]).concat(c1);
console.log(d2); // prints [0, 1, 2, 3, 4, 5, 6, 7]

/**
 * Rest -> like varargs methods - an Array is populated with all trailing arg (never null or undefined)
 */
// Only applicable to use ... as last argument of method
function varargs(x, ...rest) {
    return rest.length;
}
console.log(varargs("a", 1,2,3,4,5,6)); // prints 6
console.log(varargs("a")); // prints 0

/**
 * Sets
 */
var s = new Set([1, 3, 4, 2, 3, 2, 17, 17, 1, 17]);
console.log(s); // prints [1, 3, 4, 2, 17]

/**
 * Maps -> new API for accessing and creating maps - set,has,add,delete
 */
let m = new Map();
console.log(m.size); // 0
m.set("a", 1);
m.has("a");     // true
m.get("a");     // 1
console.log(m.size); // 1
m.delete("a");  // true
console.log(m.size); // 0

/**
 * Better for loops, for of instead of for in
 */
var colours = ["red", "blue"];
colours.createDate = Date.now();

for (let name in colours) {
    console.log(name); // "0, 1, createDate" (the property name)
    // usually fix this with
//    if(colours.hasOwnProperty(name)){
//        console.log(colours[name]); // prints "red, blue", DateObj
//    }
}
for (let word of colours) {
    console.log(word); // "red, blue" (only the values)
}