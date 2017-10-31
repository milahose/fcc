/* 
 * Translate the provided string to pig latin.
 * Pig Latin takes the first consonant (or consonant cluster) of an 
 * English word, moves it to the end of the word and suffixes an "ay".
 * If a word begins with a vowel you just add "way" to the end.
 * Input strings are guaranteed to be English words in all lowercase.
 */

function translatePigLatin(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let pigLatin; 
    
  if (vowels.indexOf(str[0]) === -1) {
    if (vowels.indexOf(str[1]) === -1) {
      pigLatin = str.slice(2);
      pigLatin += `${str.slice(0, 2)}${'ay'}`;
    } else {
      pigLatin = str.slice(1);
      pigLatin += `${str[0]}${'ay'}`;
    }
  } else if (vowels.indexOf(str[0]) !== -1) {
    pigLatin = str.slice() + 'way';
  }  
  return pigLatin;
}