/* 
 * Reverse the provided string
*/

function reverseString(str) {
  return str.split('').reverse().join('');
}
  
// O(n) solution 
function reverseString(str) {
  let reversedStr = '';
    
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
    
  return reversedStr;
}
