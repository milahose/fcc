/* 
 * Create a function that looks through an array (first argument) and returns 
 * the first element in the array that passes a truth test (second argument).
 */

function findElement(arr, func) {
  let val = arr.filter((el) => {
    return func(el) === true;
  });
    
  return val[0];
}