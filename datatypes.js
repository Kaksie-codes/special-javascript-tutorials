// string Datatype
var name = 'Idara'
var favColor = "1000"
let hobby = `Eating Noodles`

//number Datatype
let score = 90.6;
let age = 20;

//boolean Datatype
const isMarried = true;
let isLoggedIn = false;

// undefined Datatype
var soup;
let country;

// null Datatype
let count = null;

//bigint Datatype
const bigNumber = 12345678901234567890n;

// array Datatype
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange', [4, 5], {name: 'apple'}, null, true];

// object Datatype

let person = {
    name: 'John',
    age: 30,
    isMarried: true,
    hobbies: ['reading', 'painting'],
    address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA'
    },
    greet: function() {
        console.log('Hello, my name is'+ this.name);
    }
};

console.log(person);
