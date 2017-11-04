/* 
 * Return the number of total permutations of the provided 
 * string that don't have repeated consecutive letters. 
 * Assume that all characters in the provided string are each unique.
 * For example, aab should return 2 because it has 6 total 
 * permutations (aab, aab, aba, aba, baa, baa), but only 2 of them 
 * (aba and aba) don't have the same letter (in this case a) repeating.
 */

function permAlone(str) {
  let arr = str.split('');
  let result = 0;
  
  function swap(a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  
  function generator(n) {
    let regex = /([a-z])\1+/;
    
    if (n === 1 && !regex.test(arr.join(''))) {
      result++;
    } else {
      for (let i = 0; i < n; i++) {
        generator(n - 1);
        swap(n % 2 ? 0 : i, n - 1);
      }
    }
  }
  
  generator(arr.length);
  return result;
}