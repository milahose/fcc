/* 
 * Design a cash register drawer function checkCashRegister() that 
 * accepts purchase price as the first argument (price), payment as 
 * the second argument (cash), and cash-in-drawer (cid) as the third argument.
 * cid is a 2D array listing available currency. Return the string "Insufficient Funds" 
 * if cash-in-drawer is less than the change due. Return the string "Closed" 
 * if cash-in-drawer is equal to the change due. Otherwise, return 
 * change in coin and bills, sorted in highest to lowest order.
 */

function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let remainingChange = cash - price;
  let totalCash = 0;
  let remainingCash = cash;
  let changeArray = [
	["PENNY", 0.01],
	["NICKEL", 0.05],
	["DIME", 0.10], 
	["QUARTER", 0.25],
	["ONE", 1.00], 
	["FIVE", 5.00],
	["TEN", 10.00],
	["TWENTY", 20.00], 
	["ONE HUNDRED", 100.00]
  ];
  let returnArray = [];

  for (let i = 0; i < cid.length; i++) {
	totalCash += cid[i][1];
  }

  totalCash = parseFloat(totalCash.toFixed(2));

  if (totalCash === changeDue) {
  	return 'Closed';
  } else if (totalCash < changeDue) {
	return 'Insufficient Funds'; 
  }

  cid.reverse().forEach((array) => {
	if (remainingCash >= array[1]) {
	  remainingCash -= array[1];
      array[1] += array[1];
    }
  });

  changeArray.reverse().forEach((array, index) => {
    let temp;
    if (remainingChange >= array[1]) {
    temp = 0;
      while (remainingChange >= array[1] && cid[index][1] > 0) {
		remainingChange -= array[1];
		remainingChange = parseFloat(remainingChange.toFixed(2));
		cid[index][1] -= array[1];
        temp += array[1];
      }
      
      if (temp > 0.02) {
		returnArray.push([cid[index][0], temp]);
      }
    } 
  });

  if (returnArray.length === 0) {
	return 'Insufficient Funds';
  }
    
  return returnArray;
};