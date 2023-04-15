/*two sum II */
const twoSum = (numbers, target) => {
  // two pointers starting at either end of the array
  let left = 0;
  let right = numbers.length - 1; // update to point to the last element
  // while the left is less than the right
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [-1, -1];
};

const twoSumClosestToTarget = (nums, target) => {
  let left = 0; // Pointer for the leftmost element
  let right = nums.length - 1; // Pointer for the rightmost element
  let closestSum = Infinity; // Variable to store the closest sum to target

  while (left < right) {
    const sum = nums[left] + nums[right]; // Calculate the current sum

    // Update closestSum if the current sum is closer to target than the previous closestSum
    if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
      closestSum = sum;
    }

    // Move the pointers towards each other based on the current sum
    if (sum < target) {
      left++; // Move left pointer to the right
    } else {
      right--; // Move right pointer to the left
    }
  }

  return closestSum;
};

/* three sum */
const threeSum = (nums, target) => {
  let result = [];
  let n = nums.length;
  nums.sort((a, b) => a - b); // Step 1: Sort the input array

  for (let i = 0; i < n - 2; i++) {
    // Step 2: Loop through the array
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

    let left = i + 1; // Step 3: Use two pointers
    let right = n - 1;

    while (left < right) {
      // Step 4: Adjust pointers
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        // Step 5: Record valid triplets
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) left++; // Skip duplicates
        while (left < right && nums[right] === nums[right + 1]) right--; // Skip duplicates
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result; // Step 6: Return valid triplets
};

/*three sum closest */
var threeSumClosest = function (nums, target) {
  let n = nums.length;
  nums.sort((a, b) => a - b); // Step 1: Sort the input array
  let closestSum = nums[0] + nums[1] + nums[2]; // Initialize closest sum to first triplet
  let minDifference = Math.abs(target - closestSum); // Initialize minimum difference to absolute difference

  for (let i = 0; i < n - 2; i++) {
    // Step 3: Loop through the array
    let left = i + 1; // Step 4: Use two pointers
    let right = n - 1;

    while (left < right) {
      // Step 6: Adjust pointers
      let sum = nums[i] + nums[left] + nums[right]; // Calculate sum of triplet
      let difference = Math.abs(target - sum); // Calculate difference between sum and target

      if (difference < minDifference) {
        // Step 5: Update variables if closer sum is found
        minDifference = difference;
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return closestSum; // Early exit if target is found
      }
    }
  }

  return closestSum; // Step 7: Return closest sum
};

/*reverse words */
const reverseWords = (message) => {
  // Step 1: Reverse the entire message
  reverseChars(message, 0, message.length - 1);

  let start = 0; // Start of current word
  let end = 0; // End of current word

  while (end < message.length) {
    // Step 2: Find the end of the current word
    while (end < message.length && message[end] !== ' ') {
      end++;
    }

    // Step 3: Reverse the characters of the current word
    reverseChars(message, start, end - 1);

    // Step 4: Move to the next word
    start = end + 1;
    end = start;
  }

  return message;
};

// Helper function to reverse characters in an array
var reverseChars = function (arr, left, right) {
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
};

/*min product sum of two arrays */
const minProductSum = (nums1, nums2) => {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => b - a);
  let product = 0;
  for (let i = 0; i < nums1.length; i++) {
    product += nums1[i] * nums2[i];
  }
  return product;
};

/*anagrams */
const groupAnagrams = (strs) => {
  const map = {};
  const result = [];
  for (let i = 0; i < strs.length; i++) {
    const currentSorted = strs[i].split('').sort().join('');
    if (!map[currentSorted]) {
      map[currentSorted] = [strs[i]];
    } else {
      map[currentSorted].push(strs[i]);
    }
  }
  // for (let key in map) {
  //   result.push(map[key]);
  // }
  // return result;
  return Object.values(map);
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(strs));

const buildArray = function (nums) {
  const ans = new Array(nums.length); // Create an array to store the result

  for (let i = 0; i < nums.length; i++) {
    // console.log('this is nums[i]: ', nums[i]);
    // console.log('this is nums[nums[1]]: ', nums[nums[i]]);
    ans[i] = nums[nums[i]]; // Set ans[i] to nums[nums[i]]
  }

  return ans;
};

const nums = [5, 0, 1, 2, 3, 4];
console.log(buildArray(nums));

const maximumWealth = (accounts) => {
  let maxWealth = 0; // Initialize maxWealth to 0

  // Iterate through each customer's accounts
  for (let i = 0; i < accounts.length; i++) {
    let wealth = 0; // Initialize wealth for current customer to 0

    // Iterate through each bank account of the current customer
    for (let j = 0; j < accounts[i].length; j++) {
      wealth += accounts[i][j]; // Add the amount in the current bank account to wealth
    }

    maxWealth = Math.max(maxWealth, wealth); // Update maxWealth with the maximum wealth found so far
  }

  return maxWealth; // Return the maximum wealth
};

const isFirstComeFirstServed = (takeOutOrders, dineInOrders, servedOrders) => {
  let takeOutIndex = 0;
  let dineInIndex = 0;

  for (let i = 0; i < servedOrders.length; i++) {
    if (
      takeOutIndex < takeOutOrders.length &&
      servedOrders[i] === takeOutOrders[takeOutIndex]
    ) {
      takeOutIndex++;
    } else if (
      dineInIndex < dineInOrders.length &&
      servedOrders[i] === dineInOrders[dineInIndex]
    ) {
      dineInIndex++;
    } else {
      return false; // servedOrders contains an order that is not in the expected order
    }
  }

  // If all orders in servedOrders are found in expected order, and no extra orders are present,
  // then it is first-come, first-served
  return (
    takeOutIndex === takeOutOrders.length && dineInIndex === dineInOrders.length
  );
};

var longestCommonPrefix = function (strs) {
  // Return early on empty input
  if (!strs.length) return '';

  // Loop through the letters of the first word
  for (let i = 0; i <= strs[0].length; i++) {
    // Check if this character is present in the same position of every string
    if (!strs.every((string) => string[i] === strs[0][i])) {
      // If not, return the string up to and including the previous character
      return strs[0].slice(0, i);
    }
  }

  return strs[0];
};

const pairedParentheses = (str) => {
  let count = 0;

  for (let char of str) {
    if (char === '(') {
      count += 1;
    } else if (char === ')') {
      if (count === 0) {
        return false;
      }

      count -= 1;
    }
  }

  return count === 0;
};

const befittingBrackets = (str) => {
  const bracketMap = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (bracketMap[str[i]]) {
      stack.push(str[i]);
    } else if (bracketMap[stack.pop()] !== str[i]) {
      return false;
    }
  }

  return stack.length === 0;
};


