/*
 * Find the smallest common multiple of the provided parameters that can be evenly divided 
 * by both, as well as by all sequential numbers in the range between these parameters.
 * The range will be an array of two numbers that will not necessarily be in numerical order.
 * e.g. for 1 and 3 - find the smallest common multiple of both 1 
 * and 3 that is evenly divisible by all numbers between 1 and 3.
 */

function smallestCommons(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let multiple = max;
  
  function isMultiple(m, min, max) {
    for (let i = min; i < max; i++) {
      if (m % i !== 0) {
        return false;
      }
    }
    
    return true;
  }
  
  while (!isMultiple(multiple, min, max)) {
    multiple += max;
  }
  
  return multiple;
}