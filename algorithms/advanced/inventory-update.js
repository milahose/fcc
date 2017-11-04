/* 
 * Compare and update the inventory stored in a 2D array against a second 2D 
 * array of a fresh delivery. Update the current existing inventory item 
 * quantities (in arr1). If an item cannot be found, add the new item and quantity 
 * into the inventory array. The returned inventory array should be in alphabetical 
 * order by item.
 * 
 * Example inventory lists: 
 * var curInv = [
 *  [21, "Bowling Ball"],
 *  [2, "Dirty Sock"],
 *  [1, "Hair Pin"],
 *  [5, "Microphone"]
 * ];
 * var newInv = [
 *  [2, "Hair Pin"],
 *  [3, "Half-Eaten Apple"], 
 *  [67, "Bowling Ball"],
 *  [7, "Toothpaste"]
 * ];
 */

function updateInventory(arr1, arr2) {
  let inventoryObject = {};
  let updatedInventory = [];

  arr1.forEach((el) => {
	inventoryObject[el[1]] = el[0];
  });

  arr2.forEach((el) => {
    if (inventoryObject.hasOwnProperty(el[1])) {
	  inventoryObject[el[1]] += el[0];
    } else {
	  inventoryObject[el[1]] = el[0];
    }
  });

  for (let prop in inventoryObject) {
	updatedInventory.push([inventoryObject[prop], prop])
  } 

  return updatedInventory.sort((a, b) => { 
    return a[1] > b[1] ? 1 : -1;
  });
}