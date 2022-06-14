TypeScript supports some simple types (primitives) you may know.

There are three main primitives in JavaScript and TypeScript:

boolean - true or false values
number - whole numbers and floating point values
string - text values like "TypeScript Rocks"


Type Assignment
When creating a variable, there are two main ways TypeScript assigns a type:

Explicit
Implicit

Explict Type
Explicit - writing out the type:

let firstName: string = "Dylan";

Explicit type assignment are easier to read and more intentional.


Implicit Type
Implicit - TypeScript will "guess" the type, based on the assigned value:

let firstName = "Dylan";


Note: Having TypeScript "guess" the type of a value is called infer.
Implicit assignment forces TypeScript to infer the value.
Implicit type assignment are shorter, faster to type, and often used when developing and testing.


Error In Type Assignment
TypeScript will throw an error if data types do not match.

Example
let firstName: string = "Dylan"; // type string
firstName = 33; // attempts to re-assign the value to a different type

Implicit type assignment would have made firstName less noticeable as a string, but both will throw an error:

Example
let firstName = "Dylan"; // inferred to type string
firstName = 33; // attempts to re-assign the value to a different type

JavaScript will not throw an error for mismatched types.