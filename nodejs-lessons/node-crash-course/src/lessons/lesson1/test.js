function calculateTotalPrice(prices, discount) {

    // Write your code here
    //console.log(Math.max(...prices));
    const maxVal = Math.max(...prices);

    // replace value for max val in array making the discount.
    prices[prices.indexOf(maxVal)] = maxVal - ( maxVal * discount / 100 ) 
    // console.log(prices);

    // sum all values from prices
    const reducer = (accumulator, curr) => accumulator + curr;
    // console.log(prices.reduce(reducer));
    // To debug: console.error('Debug messages...');
    
    return Math.floor(prices.reduce(reducer));
}

/* Ignore and do not change the code below */
// #region main

console.log(calculateTotalPrice([200,500,100,50], 3.5))