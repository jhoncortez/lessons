// run node console.js to execute this file

// exercise 1. import variable `person` from `exports/personObject` file. no need of .js extention
// const person = require('./import/personObject')
// console.log(person);
// console.log(`My name is ${person.name} and I'm ${person.age}`)


// Exercise 2. import class `Person ` from `exports/personClass` file. no need of .js extention
const Person = require('./import/personClass')

const person = new Person('Jon', '27');

person.greeting();