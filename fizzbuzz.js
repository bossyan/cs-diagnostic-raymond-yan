'use strict';
/*

for (start; start < end; start++) {
  if(start is divisble by 3 and start is divisble by 5) {
    print "fizzbuzz"
  } else if (start is divisble by 3) {
    print "fizz"
  } else if (start is divisible by 5) {
    print "buzz"
  }
}

*/

let fizzBuzz = (start, end) => {
  for(; start <= end; start++) {
    if( start % 3 === 0 && start % 5 === 0) {
      console.log(start, 'fizzbuzz');
    } else if (start % 3 === 0) {
      console.log(start, 'fizz');
    } else if (start % 5 === 0) {
      console.log(start, 'buzz');
    }
  }
};

fizzBuzz(1, 30);
