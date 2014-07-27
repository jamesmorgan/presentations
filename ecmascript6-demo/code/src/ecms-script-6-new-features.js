"use strict";

/**
 * Object literals
 */
// Old school ECMAScript 5+ version
var home = "Germany";
var away = "Argentina";
var oldGame = {
    home: home,
    away: away
};
console.log(`Winners ${oldGame.away}`); // prints 'Winners Argentina'

// New ECMAScript 6 way
var newGame = { home, away }; // fields are given implicit values
console.log(`Losers ${newGame.home}`); // prints 'Losers Germany'







/**
 * Default Params & String Template
 */
var helloWorld = function helloWorld(alterText = "Jimbob"){
    return `${alterText} says hello!`;
};

console.log(helloWorld()); // prints 'Jimbob says hello!'
console.log(helloWorld("Billy")); // prints 'Billy says hello!'








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
 * Sets
 */
var s = new Set([1, 3, 4, 2, 3, 2, 17, 17, 1, 17]);
console.log(s); // prints [1, 3, 4, 2, 17]

/**
 * Maps -> new API for accessing and creating maps - set,has,add,delete
 */
let m = new Map();
console.log(m.size);  // 0
m.set("a", 1);
m.has("a");           // true
m.get("a");           // 1
console.log(m.size);  // 1
m.delete("a");        // true
console.log(m.size);  // 0

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





<<<<<<< HEAD:ecmascript6-demo/code/src/ecms-script-6-new-features.js


=======
>>>>>>> master:ecmascript6-demo/code/src/ecms-script-6-new-features.js
/**
 * Generators and yield keyword
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
 * Iterators - has changed a few times!
 * An iterator has a method called next. 
 *   This method returns an object with two properties: value (any value) and done (evaluated as boolean).
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


//////////////////////
// Function fun...! //
//////////////////////



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
 * Array Reduction - reduce() - allows the result of each reduction to be use in the next one
 */
// Make a re-useable function
function adder(a, b) {
    return a + b;
}

var total = [0, 1, 2, 3].reduce(adder);
console.log(total); // prints '6'

function joiner(a, b) {
    return a.concat(b);
}
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(joiner);
console.lof(flattened); // flattened is [0, 1, 2, 3, 4, 5]






/**
 * Array Filtering - ECMAScript 5
 */
var evens = numbers.filter(i => { return i % 2 === 0; });
console.log(evens); // prints 3,17

/**
 * Array Searching - some() - ECMAScript 5 - tests if some element in the array match
 */
// Create re-usable function
function canHaveADrink(element, index, array) {
    return (element >= 18);
}

var canDrink = [12, 15, 17, 20].some(canHaveADrink);
console.log(canDrink); // prints 'true' as someone can have a drink

canDrink = [12, 5, 8, 1, 4].some(canHaveADrink); 
console.log(canDrink); // prints 'false' as everyone is under age

/**
 * Array Searching - every() - ECMAScript 5 - tests all elements in the array
 */
var canDrink = [12, 15, 17, 20].every(canHaveADrink);
console.log(canDrink); // prints 'false' as 1 or more people are under age

canDrink = [99, 54, 18, 130, 44].every(canHaveADrink); 
console.log(canDrink); // prints 'true' as everyone can drink









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
console.log(varargs("a", 1,2,3,4,5,6)); // prints '6'
console.log(varargs("a")); // prints '0'

