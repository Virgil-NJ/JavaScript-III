/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. function in the global scope, this points to window objects
* 2. function called with preceding dot, this is the object before the dot
* 3. construct functions, this is the instance of the object that is created
* 4. call or apply method, this will be overridden to that object
*
* write out a code example of each explanation above
*/

// Principle 1
function greeter(name) {
    console.log(`Hello ${name}.`);
    console.log(this); //this is pointing to the global scope or window
};
greeter('Virgil');

// code example for Window Binding

// Principle 2
let greeting = {
    greeting: 'Hello',
    speak: function(name) {
        console.log(`${this.greeting} ${name}`);
        console.log(this); //this is pointing to the greeting
    }
};
greeting.speak('Virgil');

// code example for Implicit Binding

// Principle 3
function Person(name){
    this.name = name;
    this.speak = function() {
        console.log(`Hello from ${this.name}`);
        console.log(this);
    }
};

let personVirgil = new Person('Virgil');
let personAthena = new Person('Athena');
personVirgil.speak();
personAthena.speak();

// code example for New Binding

// Principle 4
personVirgil.speak.call(personAthena)

// code example for Explicit Binding


// Notes, Examples, & Practice Area  ---  erase after done

//GLOBAL BINDING
// function sayName(name) {
//     console.log(this);
//     return name;
// }
// sayName("Virgil");

//console.log(this);  //The JavaScript Program is what 'this' is pointing at.



//IMPLICIT BINDING
// const myObj = {
//     'greeting': 'Hello',
//     'sayHello': function(name) {
//         console.log(`${this.greeting} my name is ${name}`);
//         console.log(this);
//     }
// };
// myObj.sayHello('Virgil');


// const myObj = {
//     greeting: 'Hello ',
//     speak: function () {
//         console.log('implicit this: === ', this);
//         console.log(`${this.greeting} world!`);
//     }
// };
// myObj.speak();


//NEW BINDING
// function CordialPerson(greeter) {
//     this.greeting = 'Hello ';
//     this.greeter = greeter;
//     this.speak = function() {
//         console.log(this.greeting + this.greeter);
//         console.log(this);
//     }
// }

// const virgil = new CordialPerson('Rodriguez');
// const rodriguez = new CordialPerson('Virgil');

// virgil.speak();
// rodriguez.speak();

// virgil.speak.call(rodriguez);
// rodriguez.speak.apply(virgil);



// function Person(obj) {
//     this.name = obj.name;
//     this.age = obj.age;
//     this.speak = function() {
//         console.log(`This new binding`,this);
//         console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old!`);
//     }
// }

// const virgil = new Person({name: 'Virgil', age: 44});
// const athena = new Person({name: 'Athena', age: 0});

// virgil.speak();
// athena.speak();

// virgil.speak.call(athena);
// virgil.speak.apply(athena);