/* 
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
  let addedLetters = '';
  
  for (let i = 0; i < str.length; i++) {
    if ((str[i + 1] !== undefined) && (str[i + 1].charCodeAt() !== str[i].charCodeAt() + 1)) {
      addedLetters += String.fromCharCode(str[i].charCodeAt() + 1);
    }
  }
  
  return addedLetters === '' ? undefined : addedLetters;
}
