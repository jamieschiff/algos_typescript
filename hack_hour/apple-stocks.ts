/*

Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.

*/

//input = array
//output = number
//return 0 if no profit or if input is invalid

// const highestProfit = (apple_stock) => {
//   //initialize a variable to track the profit, starting at 0
//   let profit = 0;
//   //check that the argument is an array
//   if (!Array.isArray(apple_stock)) return 0;
//   //iterate over the array
//   for (let i = 0; i < apple_stock.length; i++) {
//     //set the current variable to be the buy stock
//     const buyStockPrice = apple_stock[i];
//     //iterate over the remaining elements in the array
//     for (let j = 0; i < apple_stock.length; j++) {
//       //set the current variable to the be the sell stock
//       const sellStockPrice = apple_stock[j];
//       //assign profit to the maximum of the current profit variable and the difference between the sell and buy variables
//       profit = Math.max(profit, sellStockPrice - buyStockPrice);
//     }
//   }
//   return profit;
// };

// const highestProfitOptimal = (apple_stock) => {
//   if (!Array.isArray(apple_stock)) return 0;
//   let profit = 0;
//   let buyStockPrice = apple_stock[0];
//   for (let i = 1; i < apple_stock.length; i++) {
//     const sellStockPrice = apple_stock[i];
//     if (buyStockPrice > sellStockPrice) {
//       buyStockPrice = sellStockPrice;
//     } else {
//       profit = Math.max(profit, sellStockPrice - buyStockPrice);
//     }
//   }
//   return profit;
// };

// module.exports = { highestProfit };
