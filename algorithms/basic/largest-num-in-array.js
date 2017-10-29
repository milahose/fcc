/* 
 * Return an array consisting of the largest number from each provided sub-array. 
 * For simplicity, the provided array will contain exactly 4 sub-arrays.
 */

function largestOfFour(arr) {
  let largestNums = [];
  
  for (let i = 0; i < arr.length; i++) {
    let largest = arr[i].sort((a, b) => {
      return b - a;
    });
  
    largestNums.push(largest[0]);
  }
  
  return largestNums;
}