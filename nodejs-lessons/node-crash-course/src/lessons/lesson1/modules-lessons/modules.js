/*
*Run node modules to execute exmples.
*/


// const people = require('./people');

// console.log(people);

// const data = require('./people');

// console.log(data.people, data.ages);

const { people, ages } = require('./people');
// import only this two objects

console.log(people, ages);
// return: [ 'yoshi', 'ryu', 'chun-li', 'mario' ] [ 20, 25, 30, 35 ]

const os = require('os');
console.log(os.platform(), os.homedir());
//return:  linux /home/vagrant
