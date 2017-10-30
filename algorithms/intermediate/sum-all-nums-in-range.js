/* 
 * We'll pass you an array of two numbers. 
 * Return the sum of those two numbers and all numbers between them.
 * The lowest number will not always come first.
 */

function sumAll(arr) {
  let smallest = Math.min(arr[0], arr[1]);
  let largest = Math.max(arr[0], arr[1]);
  let sum = smallest;

  for (let i = smallest + 1; i <= largest; i++) {
	  sum += i; 
  }

  return sum;
}