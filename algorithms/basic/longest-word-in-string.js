/*
 * Return the length of the longest word in the provided sentence.
 * Your response should be a number.
 */

function findLongestWord(str) {
  let longestWord = str.split(' ').sort((a, b) => {
	  return b.length - a.length;	
  });

  return longestWord[0].length;  
}