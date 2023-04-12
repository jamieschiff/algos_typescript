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
