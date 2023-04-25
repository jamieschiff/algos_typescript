/*
KADANES ALGO
- breaking doqwn complex problem into simpler problems
- solving a subproblem => saving the solution => next time the subproblem occurs, instead of doing it again we use the previous solution from memry

*/

//MAXIMUM SUBARRAY

const maxSubArray = (input) => {
  let globalMaxSum = -Infinity;
  let localMaxSum = 0;
  for (let i = 0; i < input.length; i++) {
    localMaxSum = Math.max(input[i], localMaxSum + input[i]);
    if (localMaxSum > globalMaxSum) {
      globalMaxSum = localMaxSum;
    }
  }
  return globalMaxSum;
};

const input = [1, -2, 5, -3, 4, -1, 6];
console.log(maxSubArray(input));

const maxSubArray2 = (input) => {
  if (!input) return 0;
  let maxSum = input[0];
  let currentSum = input[0];
  for (let i = 1; i < input.length; i++) {
    const currentNumber = input[i];
    currentSum = Math.max(currentNumber, currentNumber + currentSum);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};
