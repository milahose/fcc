/* 
 * You will be provided with an initial array (the first argument in the destroyer function), 
 * followed by one or more arguments. Remove all elements from the initial array that are 
 * of the same value as these arguments.
 */ 

function destroyer(arr) {
  let args = Array.prototype.slice.call(arguments);
  args.splice(0, 1);
 
  return arr.filter((el) => {
    return args.indexOf(el) === -1;
  });
}