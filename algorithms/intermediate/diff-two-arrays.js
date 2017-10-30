/* 
 * Compare two arrays and return a new array with any items only found 
 * in one of the two given arrays, but not both. In other words, 
 * return the symmetric difference of the two arrays.
 */

function diffArray(arr1, arr2) { 
  return arr1.filter((el) => {
	  return arr2.indexOf(el) === -1;
  }).concat(arr2.filter((el) => {
	  return arr1.indexOf(el) === -1;
  }));
}