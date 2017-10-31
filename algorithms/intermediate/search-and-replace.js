/* 
 * Perform a search and replace on the sentence using the arguments 
 * provided and return the new sentence. 
 * First argument is the sentence to perform the search and replace on.
 * Second argument is the word that you will be replacing (before).
 * Third argument is what you will be replacing the second argument with (after).
 * NOTE: Preserve the case of the original word when you are replacing it. 
 * For example if you mean to replace the word "Book" with the word "dog", it 
 * should be replaced as "Dog"
 */

function myReplace(str, before, after) {
  let arr = str.split(' ');
  let newSentence = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === before) {
      if (before[0] === before[0].toUpperCase()) {
        newSentence.push(after[0].toUpperCase() + after.slice(1))
      } else {
        newSentence.push(after)
      }
    } else {
        newSentence.push(arr[i]);
    }
  }

  return newSentence.join(' ');
}