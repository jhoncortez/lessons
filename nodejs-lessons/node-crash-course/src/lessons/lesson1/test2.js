// JavaScript code​​​​​​‌​​‌​​‌‌​​‌​​‌‌​​​​‌​‌‌​‌ below
// Use printErr(...) to debug your solution.

function closestToZero(numbers) {
    // Your code goes here
    // initilize needle value
    const needle = 0;
    // reduce closest 
    const closest = numbers.reduce((a, b) => {
        //console.log(a);
        //console.log(b);
        return Math.abs(b - needle) < Math.abs(a - needle) ? Math.abs(b) : Math.abs(a);
    });
    return closest;
}

var test1 = closestToZero([-9, 8, 2, -5, 7]);
console.log(test1); // Should be 2
var test2 = closestToZero([-3, -2, -1, 1, 2, 3]);
console.log(test2); // Should be 1