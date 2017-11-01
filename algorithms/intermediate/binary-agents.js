/*
 * Return an English translated sentence of the passed binary string.
 * The binary string will be space separated.
 */

function binaryAgent(str) {
  return str.split(' ').map((el) => {
    return el = String.fromCharCode(parseInt(el, 2));
  }).join('');
}