// Solution to Problem 6

let fibonacci_iterative = num => {
  let a = 1;
  let b = 0;
  let temp;

  while(num-- >= 0) {
    temp = a;
    a = a+b;
    b = temp;
    console.log(b);
  }
};

console.log('fibonacci_iterative');
fibonacci_iterative(7);


// Solution to Problem 7
let factorial_recursive = num => {
  if(num === 1) {
    return 1;
  }
  return num * factorial_recursive(num - 1);
}

console.log('factorial_recursive');
console.log(factorial_recursive(3));
console.log(factorial_recursive(5));
console.log(factorial_recursive(7));
