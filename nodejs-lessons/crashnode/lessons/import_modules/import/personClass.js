class Person 
{
    constructor(name, age)
    {
        this.name= name;
        this.age= age;
    }

    greeting()
    {
        console.log(`My name is ${this.name} and I am ${this.age} `)
    }
}

// export class Person to use it in other file
module.exports = Person;