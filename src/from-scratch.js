// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr) => {
    if(arr.length === 0) return 0 // checking if the length of the arr is 0 
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Reverse string using recursive approach
const reverse = (str) => {
    if(str.length === 1) return str
    return reverse(str.substring(1)) + str[0]
};

// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {
    //guard clause for 0 input
    if(n === 0) return 0

    // get the fib number --> add thhe previous number with the curr number
    let first = 0
    let second = 1
    let fib = first + second

    // start building the sequence iteraively
    //loop n amount of times to build the nth fib number
    for(let i = 2; i < n; i++){
    // update first
    first = second
    //update second
    second = fib
    // update fib
    fib = first + second
    }
    return fib
};


// Recursive fibonacci
const fibRec = (n) => {    
    if(n <= 1) return

    return fibRec(n-1) + fibRec(n-2)};

// Return the index of target in arr, or -1 if not found using recursion 
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {};

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
