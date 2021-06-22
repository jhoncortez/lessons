const _ = require('lodash'); // will look lodash in node_modules 

const lodash_toString = ($value) => {
    console.log(_.toString($value))
}

const lodash_reverse = ($array) => {
    console.log(_.reverse($array))
}

const lodash_findUsersByAge = ($searchTerm) => {
    const users = [
        { 'user': 'barney',  'age': 36, 'active': true },
        { 'user': 'fred',    'age': 40, 'active': false },
        { 'user': 'pebbles', 'age': 1,  'active': true }
      ];

    console.log(_.find(users, (o) => o.age == $searchTerm ))
}
module.exports = {lodash_toString,lodash_reverse, lodash_findUsersByAge} ;
