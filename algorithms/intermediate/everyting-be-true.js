/* 
 * Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
 * Remember, you can access object properties through either dot notation or [] notation.
 */

function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    if (!collection[i][pre]) {
      return false;
    }
  }
  
  return true;
}
  