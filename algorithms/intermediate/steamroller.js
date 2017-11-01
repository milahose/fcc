/* 
 * Flatten a nested array. 
 * You must account for varying levels of nesting.
 * Remember to use Read-Search-Ask if you get stuck. 
 * Try to pair program. Write your own code.
 */

function steamrollArray(arr) {
  let flat = [];

  arr.forEach((el) => {
    if (Array.isArray(el)) {
      flat.push(...steamrollArray(el));
    } else {
      flat.push(el);
    }
  });

  return flat;
}