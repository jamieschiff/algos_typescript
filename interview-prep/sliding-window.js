/*
- problems that involve finding a subset or subarray of contiguous elements in an array or string
- technique: creating a window of size k and then moving the window one position at a time to find the optimal solution

implementation:
- two pointers to represent the start and end of the currrent window
  - also initialize any variables - like counter or sum - to keep track of the window
- while the end pointer is less than the length of the array or string
  - move the end pointer to the right one position
  - update the counter or sum based on the new element in the window
  - while the window is invalid (ie does NOT meet the problem constraints)
    - move the start pointer to the right one position
    - update the counter or sum based on the removed element from the window
  - check if the current window is optimal -> update solution if necessary
- return solution

general strategy:
- two pointers to represent the start and end of the currrent window
- move the end pointer till we find a valid window
- move the start pointer until the window is no longer valid
- continue process until we have considered all possible windows

complexity:
- O(n) - where n is length of array or string - only need to traverse the elements of the array or string once

example problems:
- max or min value of a subArray
- longest substring that contains a given set of characters
- finding the first occurence of a substring within a larger string
- finding largest subarray with a sum less than or equal to a given target value
- array, string, sub array, sub string, largest sum, max sum, min sum
*/

/*Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array.*/

// Example implementation in JavaScript
function findLongestSubarrayWithSum(arr, targetSum) {
  let left = 0; // Initialize left pointer to 0
  let right = 0; // Initialize right pointer to 0
  let currentSum = 0; // Initialize current sum to 0
  let maxLength = 0; // Initialize maximum length to 0

  while (right < arr.length) {
    currentSum += arr[right]; // Add current element to current sum

    while (currentSum > targetSum) {
      currentSum -= arr[left]; // Subtract element at left pointer from current sum
      left++; // Move left pointer to the right
    }

    if (currentSum === targetSum) {
      maxLength = Math.max(maxLength, right - left + 1); // Update maximum length
    }

    right++; // Move right pointer to the right
  }

  return maxLength;
}
