/*
 * Return the provided string with the first letter of each word capitalized. 
 * Make sure the rest of the word is in lower case.
 * For the purpose of this exercise, you should also capitalize connecting 
 * words like "the" and "of".
 */ 

function titleCase(str) {
  let arr = str.toLowerCase().split(' ');
  
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }

  return arr.join(' ');
}