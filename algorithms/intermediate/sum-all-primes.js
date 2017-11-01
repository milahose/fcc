/* 
 * Sum all the prime numbers up to and including the provided number.
 * A prime number is defined as a number greater than one and having only two divisors, one and itself. 
 * For example, 2 is a prime number because it's only divisible by one and two.
 * The provided number may not be a prime.
 */

function dropElements(arr, func) {
  let temp = arr.slice();
  
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return temp;
    } else {
      temp = temp.slice(1);
    }
  }
    
  return [];
}