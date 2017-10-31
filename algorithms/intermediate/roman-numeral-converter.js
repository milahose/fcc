/* 
 * Convert the given number into a roman numeral.
 * All roman numerals answers should be provided in upper-case.
 * http://www.mathsisfun.com/roman-numerals.html
 */

function convertToRoman(num) {
  let numToRoman = '';
  let tempNum = num;
  let romans = [
    ['M', 1000], ['CM', 900], ['D', 500], ['C', 100],
	  ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], 
	  ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
  ]; 

  for (let i = 0; i < romans.length; i++) {
    while (tempNum >= romans[i][1]) {
	  tempNum -= romans[i][1];
      numToRoman += romans[i][0];
    }
  }

  return numToRoman;
}