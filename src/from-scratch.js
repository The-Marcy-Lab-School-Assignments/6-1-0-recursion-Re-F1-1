// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr = [], sumOfArray = 0, index = 0) => {
    if(arr.length === index) return sumOfArray
    return sum(arr, sumOfArray + arr[index], index + 1)

}

// Reverse string using recursive approach
const reverse = (str) => {
  if (str.length === 1) return str;
  return reverse(str.substring(1)) + str[0];
};

// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {
  //guard clause for 0 input
  if (n === 0) return 0;

  // get the fib number --> add thhe previous number with the curr number
  let first = 0;
  let second = 1;
  let fib = first + second;

  // start building the sequence iteraively
  //loop n amount of times to build the nth fib number
  for (let i = 2; i < n; i++) {
    // update first
    first = second;
    //update second
    second = fib;
    // update fib
    fib = first + second;
  }
  return fib;
};

// Recursive fibonacci
const fibRec = (n) => {    
    if(n <= 1) return n

  return fibRec(n - 1) + fibRec(n - 2);
};

// Return the index of target in arr, or -1 if not found using recursion 
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
// if target is not in the array base case
if(start > end) return -1
// find the middle index
let middle = Math.floor((start + end) / 2) // gets the middle index
// console.log(middle)
//if the middle index is not the target
if(arr[middle] === target) return middle // you have to do arr[middle], because middle is returning a number and doing arr[] will allow us to access the middle index of the array
// check if the middle index is less than the target
if(arr[middle] > target){
   return binarySearch(arr, target, start, middle - 1)
}else {
// call the function recursivley
return binarySearch(arr, target, middle + 1, end)
}
};

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
