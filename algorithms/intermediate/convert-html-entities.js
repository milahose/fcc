/* 
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
 * in a string to their corresponding HTML entities.
 */

function convertHTML(str) {
  let converted = str.split('');
  let entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;'
  };
  
  return converted.map((entity) => {
    return entities[entity] || entity;
  }).join('');
}