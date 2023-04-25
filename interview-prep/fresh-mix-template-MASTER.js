const twoSum1 = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const difference = target - current;
    if (map.has(difference)) {
      return [map.get(difference), i];
    } else {
      map.set(current, i);
    }
  }
  return [-1, -1];
};
// console.log(twoSum1([1,2,3], 5))

const threeSum = (nums) => {
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (current > 0) {
      break;
    } else if (current === nums[i + 1]) {
      continue;
    } else {
      twoSum(nums, i);
    }
  }
};

const twoSum = (array, index) => {
  let left = index + 1;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[index] + array[left] + array[right];
    if (currentSum < 0) {
      left++;
    } else if (currentSum > 0) {
      right--;
    }
  }
};

const containsDuplicate = (nums) => {
  const visited = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (visited.has(nums[i])) {
      return true;
    } else {
      visited.add(nums[i]);
    }
  }
  return false;
};

const maxProfit =  (prices) =>{
  let maxProfit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i]
    if(typeof currentPrice !== 'number') return 0
    minPrice = Math.min(minPrice, currentPrice);
    maxProfit = Math.max(maxProfit, currentPrice - minPrice);
  }
  return maxProfit;
};

const isValidParens =  (brackets) =>{
  const parensMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const openingBracketsStack = [];
  for (const bracket of brackets) {
    if (bracket in parensMap) {
      openingBracketsStack.push(bracket);
    } else if (parensMap[openingBracketsStack.pop()] !== bracket) {
      return false;
    }
  }
  return openingBrackets.length === 0;
};

const maxSubArray = (nums) => {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

const minSubArrayLength = (nums, target)=> {
  let left = 0
  let right = 0
  let sum = 0
  let minLength = Infinity
  while(right < nums.length){
    //add the value at the right pointer
    sum += nums[right]
    while (sum >= target){
      minLength = Math.min(minLength, right - left + 1)
      //subtract value at left pointer
      sum -= nums[left]
      left++
    }
    right++
  }
  return minLength === Infinity ? 0 : minLength
}
const mergeIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  intervals.forEach((current) => {
    const lastInterval = result[result.length - 1];
    if (lastInterval[1] >= current[0]) {
      lastInterval[1] = Math.max(lastInterval[1], current[1]);
    } else {
      result.push(current);
    }
  });
  return result;
};

const groupAnagrams = (strs) => {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const currentSorted = strs[i].split('').sort().join('');
    if (map.has(currentSorted)) {
      map.get(currentSorted).push(strs[i]);
    } else {
      map.set(currentSorted, [strs[i]]);
    }
  }
  return [...map.values()]
};

const productExceptSelf = (nums) => {
  let zeroCount = 0;
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (current === 0) {
      zeroCount++;
    } else {
      product = product * current;
    }
  }
  if (zeroCount > 1) {
    return new Array(nums.length).fill(0);
  } else if (zeroCount === 0) {
    return nums.map((element, i) => {
      return product / element;
    });
  } else {
    return nums.map((element, i) => {
      if (element === 0) {
        return product;
      } else {
        return 0;
      }
    });
  }
};

const setZeroes = (matrix) => {
  const rowSet = new Set();
  const colSet = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!matrix[i][j]) {
        rowSet.add(i);
        colSet.add(j);
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (rowSet.has(i) || colSet.has(j)) matrix[i][j] = 0;
    }
  }
};

const longestPalindrome = (s) => {
  if (s.length === 1) return s;

  // Helper function to check if string is a palindrome
  const isPalindrome = (str) => {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
  };

  let longestPal = '';
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = 0; j < s.length; j++) {
      const current = s.slice(i, j + 1);
      if (current === '') continue;
      if (isPalindrome(current) && current.length > longestPal.length) {
        longestPal = current;
      }
    }
  }
  return longestPal;
};

const allSubsets = (array) => {
  const result = [];
  const current = [];
  const generate = (startIndex) => {
    if (startIndex === array.length) {
      result.push(current.slice());
      return;
    }
    //take it
    current.push(array[startIndex]);
    generate(startIndex + 1);
    //leave it
    current.pop();
    generate(startIndex + 1);
  };
  generate(0);
  return result;
};

const htPerm = (numHeads, numTails) => {
  const result = [];
  const current = '';
  const generate = (h, t) => {
    if (h === 0 && t === 0) {
      result.push(current.slice());
      return;
    }
    //take head
    if (h > 0) generage(current + 'h', h - 1, t);
    //take tail
    if (t > 0) generage(current + 't', h, t - 1);
  };
  generate(numHeads, numTails);
  return result;
};

const combine = (n, k) => {
  const result = [];
  const generate = (index, combination) => {
    if (combination.length === k) {
      result.push([...combination]);
      return;
    }
    if (combination.length > k) return;
    for (let i = index; i <= n; i++) {
      combination.push(index);
      generate(index + 1, combination);
      combination.pop();
    }
  };
  generate(1, []);
  return result;
};

const groupAnagrams2 = (strs) => {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const currentSorted = strs[i].split('').sort().join('');
    if (map.has(currentSorted)) {
      map.get(currentSorted).push(strs[i]);
    } else {
      map.set(currentSorted, [strs[i]]);
    }
  }
  return Object.values(map);
};

const subsetSum = (nums, target, index = 0) => {
  if (target === 0) return true;
  if (index === nums.length) return false;
  return (
    subsetSum(nums, target - nums[index], index + 1) ||
    subsetSum(nums, target, index + 1)
  );
};

const minMeetingRooms =  (intervals)=> {
  intervals.sort((a, b) => a[0] - b[0]);
  const mergedIntervals = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const lastEl = mergedIntervals[mergedIntervals.length - 1];
    const currEl = intervals[i];
    if (currEl[0] >= lastEl[1]) lastEl[1] = Math.max(lastEl[1], currEl[1]);
    else mergedIntervals.push(currEl);
  }

  return mergedIntervals.length;
};

const isSubstring = (str, target) => {
  const n = str.length;
  const m = target.length;
  let i = 0;
  let j = 0;

  // Iterate through the input string and target substring with two pointers
  while (i < n && j < m) {
    // If characters match, move both pointers to the right
    if (str[i] === target[j]) {
      i++;
      j++;
    } else {
      // If characters do not match, move only the pointer in the input string to the right
      i++;
      // Reset the pointer in the target substring to the beginning
      j = 0;
    }
  }
  // If all characters in the target substring are found, return true
  if (j === m) {
    return true;
  }
  // If target substring is not found, return false
  return false;
};

const findMinRotated = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return nums[left];
};

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return '';
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (j < prefix.length && strs[i][j] === prefix[j]) {
      j++;
    }
    prefix = prefix.slice(0, j);
    if (prefix === '') return '';
  }
  return prefix;
};

const maxDepth = (arr) => {
  let subDepth = 0;
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      subDepth = Math.max(maxDepth(element), subDepth);
    }
  });
  return subDepth + 1;
};

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  //split array into two halves
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  //recursively sort left and right halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  //merge sort the sorted left and right halves
  return merge(sortedLeft, sortedRight);
};
const merge = (array1, array2) => {
  const mergedArray = [];
  let pointer1 = 0;
  let pointer2 = 0;
  while (array1[pointer1] !== undefined && array2[pointer2] !== undefined) {
    if (array1[pointer1] < array2[pointer2]) {
      mergedArray.push(array1[pointer1]);
      pointer1++;
    } else if (array1[pointer1] > array2[pointer2]) {
      mergedArray.push(array2[pointer2]);
      pointer2++;
    }
  }
  while (pointer1 < array1.length) {
    mergedArray.push(array1[pointer1]);
    pointer1++;
  }

  while (pointer2 < array2.length) {
    mergedArray.push(array2[pointer2]);
    pointer2++;
  }
  return mergedArray;
};

const modeNested = (array) => {
  const tally = {};
  let char = -Infinity;
  let maxCount = 0;
  const process = (array) => {
    for (let i = 0; i < array.length; i++) {
      const currentChar = array[i];
      //check if it is an array
      if (Array.isArray(currentChar)) {
        process(currentChar);
        return;
      }
      if (!tally[currentChar]) tally[currentChar] = 1;
      else tally[currentChar]++;
      if (
        tally[currentChar] > maxCount ||
        (tally[currentChar] === maxCount && currentChar > char)
      ) {
        maxCount = tally[currentChar];
        char = currentChar;
      }
    }
  };
  process(array);
  return char;
};

const needleInHaystack = (string, substring) => {
  for (let i = 0; i < string.length; i++) {
    let j = 0;
    while (j < substring.length && string[j + j] === substring[j]) {
      j++;
    }
    if (j === substring.length) {
      return true;
    }
  }
  return false;
};

const nestedArrMaxLevel = (arr, level) => {
  let max = arr.length ? -Infinity : undefined;
  const process = (array, depth) => {
    array.forEach((element) => {
      if (Array.isArray(element) && depth < level) {
        process(element, depth++);
      } else if (typeof element === 'number') {
        if (element > max) {
          max = element;
        }
      }
    });
  };
  process(arr, 1);
  return max;
};
//time: O (N + M log M) where N is the total number of elements across all arrays and M is the number of keywords with maximum occurrences
const keywordMode = (array) => {
  const keywordMap = new Map();
  //helper function to recursively process nested loops
  const processArray = (arr) => {
    for (const element of arr) {
      if (Array.isArray(element)) {
        processArray(element);
      } else if (typeof element === 'string') {
        if (keywordMap.has(element)) {
          keywordMap.set(element, keywordMap.get(element) + 1);
        } else {
          keywordMap.set(element, 1);
        }
      }
    }
  };
  //process the input array
  processArray(array);
  //find the maximum occurrences of keywords
  let maxOccurrences = 0;
  keywordMap.forEach((value) => {
    maxOccurrences = Math.max(maxOccurrences, value);
  });
  //collect keywords with maximum occurrences in lexicographical order
  const results = [];
  keywordMap.forEach((value, key) => {
    if (value === maxOccurrences) {
      results.push(key);
    }
  });
  results.sort();
  return results;
};

const permPalin = (str) => {
  //even -> characters have to appear equal # of times
  // odd -> one charcter may appear once, all other characters must appear equal number of times
  const map = {};
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    map[current] = (map[current] || 0) + 1;
  }
  //check if the string has an even number of characters
  if (str.length % 2 === 0) {
    //all values should be even numbers
    const values = Object.values(map);
    return values.every((val) => {
      return val % 2 === 0;
    });
  } else {
    let singleAppearance = 0;
    for (const key in map) {
      const current = map[key];
      if (current === 1) {
        singleAppearance++;
      }
    }
    if (singleAppearance === 1) {
      return true;
    } else {
      return false;
    }
  }
};

const retrieveDepth = (arr, depth) => {
  const result = [];
  const process = (arr, currentDepth) => {
    arr.forEach((element) => {
      if (Array.isArray(element) && currentDepth <= depth) {
        process(element, currentDepth + 1);
      } else if (typeof element === 'number' && currentDepth <= depth) {
        result.push(element);
      }
    });
  };
  process(arr, 1);
  return result;
};

const flattenDepth = (arr, depth) => {
  const result = [];
  const flatten = (arr, currentDepth) => {
    arr.forEach((element) => {
      if (Array.isArray(element) && currentDepth < depth) {
        flatten(element, currentDepth + 1);
      } else {
        result.push(element);
      }
    });
  };
  flatten(arr, 0);
  return result;
};

const reverseArray = (array) => {
  // if(!Array.isArray(array)) return undefined
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
    left++;
    right--;
  }
  return array;
};

const reverseSentence = (sentence) => {
  const words = sentence.split(' ');
  reverseArray(words);
  return words.join(' ');
};

const reverseLinkedList = (head) => {
  if (!head || !head.next) return head;
  let current = head;
  let previous;
  while (current !== null) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  head = previous;
  return head;
};

const rps = (n) => {
  if (n === 0) return [''];
  const result = [];
  const perm = (str) => {
    if (str.length === n) {
      result.push(str);
      return;
    }
    perm(str + 'r');
    perm(str + 'p');
    perm(str + 's');
  };
  perm('');
  return result;
};

const passwords = (chars, n) => {
  const result = [];
  const generatePasswords = (prefix) => {
    if (prefix.length === n) {
      result.push(prefix);
      return;
    }
    for (let i = 0; i < chars.length; i++) {
      generatePasswords(prefix + chars[i]);
    }
  };
  generatePasswords('');
  return result;
};

const subsetSumClosest = (nums, target) => {
  let minDifference = Infinity;
  const process = (target, index) => {
    if (index === nums.length) {
      minDifference = Math.min(minDifference, Math.abs(target));
      return;
    }

    process(target - nums[index], index + 1);
    process(target, index + 1);
  };

  process(target, 0);
  return minDifference;
};

const generateCombinations = (nums, target) => {
  const subsets = [];
  const curr = [];

  const processSubset = (target, index) => {
    if (target === 0) {
      subsets.push(curr.slice());
      return;
    }
    if (nums[index] > target || index === nums.length) return;
    //take it
    curr.push(nums[index]);
    processSubset(target - nums[index], index);
    //leave it
    curr.pop();
    processSubset(target, index + 1);
  };

  processSubset(target, 0);
  return subsets;
};

const substringNonrepeating = (str) => {
  if (str.length === 0) {
    return 0;
  }
  const charMap = new Map();
  let maxLength = 0;
  let left = 0;
  let right = 0;
  while (right < str.length) {
    //if the character has not yet been added to the map or the current value of the character is 0
    if (!charMap.has(str[right]) || charMap.get(str[right]) === 0) {
      //add the character to the character map with a value of 1
      charMap.set(str[right], 1);
      //update maxLength comparing current max window size and the current window size
      maxLength = Math.max(maxLength, right - left + 1);
      //move right pointer to the right
      right++;
    } else {
      //if the character exists in the map, reset the count to 0
      charMap.set(str[left], 0);
      //move left pointer to the right
      left++;
    }
  }
  return maxLength;
};

const maxSubstringWithoutRepeating = (string) => {
  const set = new Set();
  let start = 0;
  let end = 0;
  let max = 0;
  while (end < string.length) {
    const current = string[end];
    //if the set does not have the current element
    if (!set.has(current)) {
      set.add(current);
      end++;
      //check current substring
      max = Math.max(max, end - start);
      //if the set has the current
    } else {
      set.delete(string[start]);
      start++;
    }
  }
  return max;
};

function allSubsets2(nums) {
  const results = [];
  const curr = [];

  const generate = (index) => {
    if (index === nums.length) return results.push(curr.slice());

    curr.push(nums[index]);
    generate(index + 1);
    curr.pop();

    generate(index + 1);
  };

  generate(0);
  return results;
}

function reverseWords(message) {
  // reverse all the characters in the entire message
  reverseCharacters(message, 0, message.length - 1);

  let currentWordStartIndex = 0;
  for (let i = 0; i <= message.length; i++) {
    // Found the end of the current word!
    if (i === message.length || message[i] === ' ') {
      reverseCharacters(message, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
    }
  }
}

function reverseCharacters(message, leftIndex, rightIndex) {
  // Walk towards the middle, from both sides
  while (leftIndex < rightIndex) {
    // Swap the left char and right char
    const temp = message[leftIndex];
    message[leftIndex] = message[rightIndex];
    message[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
}

const lowestCommonAncestor = (root, p, q) => {
  //get the path
  //compare the path for the first one in common and return that value
  const pathP = findPath(root, p);
  const pathQ = findPath(root, q);
  const set2 = new Set(pathQ);

  for (let val of pathP) {
    if (set2.has(val)) {
      return val;
    }
  }
};
const findPath = (root, node) => {
  if (root === null) return null;
  if (root.value === node) return [root.value];

  const leftPath = findPath(root.left, node);
  if (leftPath !== null) {
    leftPath.push(root.value);
    return leftPath;
  }
  const rightPath = findPath(root.right, node);
  if (rightPath !== null) {
    rightPath.push(root.value);
    return rightPath;
  }
  return null;
};

const uncompress = (s) => {
  let uncompressedOutput = '';
  const numbers = '1234567890';
  let laggingPointer = 0;
  let leadingPointer = 0;
  while (leadingPointer < s.length) {
    if (numbers.includes(s[leadingPointer])) {
      while (numbers.includes(s[leadingPointer])) {
        leadingPointer++;
      }
      for (
        let i = 0;
        i < Number(s.slice(laggingPointer, leadingPointer));
        i++
      ) {
        uncompressedOutput += s[leadingPointer];
      }
      leadingPointer++;
      laggingPointer = leadingPointer;
    } else {
      continue;
    }
  }
  return uncompressedOutput;
};

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    if (arr[i] > pivot) right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

const maxProfit2 = (array) => {
  let profit = 0;
  for (let i = 0; i < array.length; i++) {
    //todays price
    const current = array[i];
    //tomorrows price
    const next = array[i + 1];
    //if the amount you could sell if for tomorrow is more than it costs to buy it today
    const buyTodaySellTomorrow = next - current;
    if (current < next) {
      //can continue buying and adding to profits
      profit = profit + buyTodaySellTomorrow;
    }
  }
  return profit;
};

const maxProductSubarray = (nums) => {
  let maxSoFar = nums[0];
  let minSoFar = nums[0];
  let maxProduct = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const currentNumber = nums[i];
    //update maxsofar and minsofar based on curent number
    const tempMax = Math.max(
      maxSoFar * currentNumber,
      minSoFar * currentNumber,
      currentNumber
    );
    minSoFar = Math.min(
      maxSoFar * currentNumber,
      minSoFar * currentNumber,
      currentNumber
    );
    maxSoFar = tempMax;
    //update maxProduct with the max thus far
    maxProduct = Math.max(maxProduct, maxSoFar);
  }
  return maxProduct;
};

const maxAverageSubArray = (nums, k) =>{
  let start = 0 
  let end = 0
  let maxAvg = -Infinity
  let currentSum = 0
  while (end < nums.length){
      const currentEnd = nums[end]
      currentSum += currentEnd
      if(end-start +1 === k){
          const currentAverage = currentSum / k
          maxAvg = Math.max(currentAverage, maxAvg)
          currentSum -= nums[start]
          start++
      }
      end++
  }
  return maxAvg
};

const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;
  const cacheS = {};
  const cacheT = {};
  let output = true;

  for (let i = 0; i < s.length && i < t.length; i++) {
    const charS = s[i];
    const charT = t[i];
    //if the current character has not been added to either cache
    if (!cacheS[charS] && !cacheT[charT]) {
      cacheS[s[i]] = t[i];
      cacheT[t[i]] = s[i];
      // console.log('s cache: ', cacheS, 't cache: ', cacheT)
    } else if (!(cacheS[s[i]] === t[i] && cacheT[t[i]] === s[i])) {
      output = false;
    }
  }
  return output;
};

const sumPossible = (amount, nums) => {
  // Base case: if the amount becomes 0, return true
  if (amount === 0) return true;
  // Base case: if the amount becomes negative or no numbers are left, return false
  if (amount < 0 || nums.length === 0) return false;
  //take it
  const include = sumPossible(amount - nums[0], nums);
  const exclude = sumPossible(amount, nums.slice(1));
  // Return true if either including or excluding the first number leads to a valid sum
  return include || exlude;
};

const findAnagrams = (s, p) => {
  let hashMap = new Map();
  for (let i = 0; i < p.length; i++) {
    if (hashMap.has(p[i])) {
      hashMap.set(p[i], hashMap.get(p[i]) + 1);
    } else {
      hashMap.set(p[i], 1);
    }
  }
  let result = [];
  let start = 0;
  let end = 0;
  while (end < s.length) {
    const currentEnd = s[end];
    const currentStart = s[start];
    if (hashMap.get(currentEnd) > 0) {
      hashMap.set(currentEnd, hashMap.get(currentEnd) - 1);
      end++;
      if (end - start === p.length) {
        result.push(start);
      }
    } else if (start === end) {
      start++;
      end++;
    } else {
      hashMap.set(currentStart, hashMap.get(currentStart) + 1);
      start++;
    }
  }
  return result;
};

const eraseOverlapIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals);
  count = 0;
  let previous = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < previous[1]) {
      count++;
    } else {
      previous = intervals[i];
    }
  }
  return count;
};

function missingNumber(nums) {
  const n = nums.length;
  const totalSum = (n * (n + 1)) / 2; // Sum of numbers from 0 to n
  const actualSum = nums.reduce((acc, curr) => acc + curr, 0); // Sum of numbers in the nums array
  return totalSum - actualSum; // Difference between the total sum and actual sum is the missing number
}

const findTargetInSortedArray = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }
    // When dividing the roated array into two halves, one must be sorted.
    // Check if the left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        // target is in the left
        right = mid - 1;
      } else {
        // target is in the right
        left = mid + 1;
      }
    }
    // Otherwise, the right side is sorted
    else {
      if (nums[mid] <= target && target <= nums[right]) {
        // target is in the right
        left = mid + 1;
      } else {
        // target is in the left
        right = mid - 1;
      }
    }
  }

  return -1;
};

/* BST DFS */

const dfsRecursive = (root) => {
  if (root === null) return [root.val];
  const left = dfsRecursive(root.left);
  const right = dfsRecursive(root.right);
  return [root.val, ...left, ...right];
};

/* BST BFS */

const bst = (root) => {
  const queue = [root];
  while (queue.length) {
    const current = queue.shift();
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
};

const pathFinder = (root, target) => {
  const result = pathFinderHelper(root, target);
  if (result === null) {
    return null;
  } else {
    return result.reverse();
  }
};

const pathFinderHelper = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [root.val];

  const leftPath = pathFinderHelper(root.left, target);
  if (leftPath !== null) {
    leftPath.push(root.val);
    return leftPath;
  }

  const rightPath = pathFinderHelper(root.right, target);
  if (rightPath !== null) {
    rightPath.push(root.val);
    return rightPath;
  }
  return null;
};

const longestPalindromeSubstring = (s) => {
  let longest = '';
  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  };
  for (let i = 0; i < s.length; i++) {
    //CHECK ODDS
    const palindromeOdd = expandAroundCenter(i, i);
    if (palindromeOdd.length > longest.length) {
      longest = palindromeOdd;
    }
    //check evens
    const palindromeEven = expandAroundCenter(i, i + 1);
    if (palindromeEven.length > longest.length) {
      longest = palindromeEven;
    }
  }
  return longest;
};

const increasingTripletWorks = (nums) => {
  let min1 = Infinity; // Initialize the first minimum value to positive infinity
  let min2 = Infinity; // Initialize the second minimum value to positive infinity

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= min1) {
      min1 = nums[i]; // Update min1 if a smaller value is encountered
    } else if (nums[i] <= min2) {
      min2 = nums[i]; // Update min2 if a value between min1 and min2 is encountered
    } else {
      return true; // We have found a triplet that satisfies the condition
    }
  }
  return false; // No such triplet found
};

const checkPermutationInString =  (s1, s2) =>{
	if (s1.length > s2.length) return false;
	let neededChar = {}
	for (let i = 0; i < s1.length; i++) {
		neededChar[s1[i]] = (neededChar[s1[i]] || 0) + 1;
	}
	let left = 0, //left pointer/index of the sliding window
		right = 0, //right pointer/index of the sliding window
		requiredLength = s1.length, //length of the substring required in s2
	while (right < s2.length) {
		if (neededChar[s2[right]] > 0) requiredLength--;
		neededChar[s2[right]]--;
		right++
		// equiredLength becomes 0 it means we have found a match of the s2 substring
		if (requiredLength === 0) return true;

		// window is equal to s1 lenght but still have required character
		// then we have to remove left element of window i.e left++ and add new element from right 
		// will be added in next iteration
		if (right - left === s1.length) {
			// if the left element we are removing was a required character then we increase requiredLength
			// because that element will no longer be the part of sliding window
			if (neededChar[s2[left]] >= 0) requiredLength++;
			// We will also increase the count of left element removed from window
			neededChar[s2[left]]++;
			// And finally we will decrease the window size by 1 from left i.e left++
			left++
		}
	}
	return false;
};


const generateParenthesis = (n) => {
  const output = [];
  const generate = (str, left, right) => {
    if (str.length === n * 2) {
      output.push(str.slice());
    }
    if (left < n) {
      generate(str + '(', left + 1, right);
    }
    if (right < left) {
      generate(str + ')', left, right + 1);
    }
  };
  generate('', 0, 0);
  return output;
};

const getPermutations = (str) => {
  // const permutations = new Set()
  const permutations = [];
  //base case: if the input string only has one character
  if (str.length === 1) {
    permutations.push(str);
    // permutations.add(str)
    return permutations;
  }
  //iterate through each character in the input string
  for (let i = 0; i < str.length; i++) {
    //remove the current character from the input string
    const char = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    //recursively generate permutations for the remaining characters
    const subPermutations = getPermutations(remaining);
    //add the character to the beginning of each sub-permutation
    subPermutations.forEach((subPermutation) => {
      permutations.push(char + subPermutation);
    });
  }
  return permutations;
};

const permute = (nums)=>{
  const result = []
  if (nums.length === 1) return [[...nums]]
  if (nums.length === 2) return [[nums[0], nums[1]], [nums[1],nums[0]]]
  for (let i = 0; i < nums.length; i++){
    //remove the first element and save it in a variable
    const n = nums.shift()
    const perms = permute(nums)
    //traverse each of the permutations called by the recursive call
    for (let perm of perms){
      //add back the number we removed earlier to reduce the problem size back to the permutation array
      perm.push(n)
      result.push(perm)
    }
    //add the element we removed back
    nums.push(n)
  }
  return result
}

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  const takeOutQueue = [...takeOutOrders]; // Use spread operator to create a queue from takeOutOrders
  const dineInQueue = [...dineInOrders]; // Use spread operator to create a queue from dineInOrders

  // Iterate through each served order
  for (let i = 0; i < servedOrders.length; i++) {
    const servedOrder = servedOrders[i];

    // Check if the served order matches the next order in the take-out queue
    if (takeOutQueue.length > 0 && servedOrder === takeOutQueue[0]) {
      takeOutQueue.shift(); // Dequeue the matched order from the take-out queue
    }
    // Check if the served order matches the next order in the dine-in queue
    else if (dineInQueue.length > 0 && servedOrder === dineInQueue[0]) {
      dineInQueue.shift(); // Dequeue the matched order from the dine-in queue
    }
    // If the served order doesn't match either take-out or dine-in order, it's not first-come, first-served
    else {
      return false;
    }
  }

  // If all served orders are matched with either take-out or dine-in orders, and there are no remaining orders in both queues, it's first-come, first-served
  if (takeOutQueue.length === 0 && dineInQueue.length === 0) {
    return true;
  } else {
    return false;
  }
}
const maxAreaWaterTank = (height) => {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    //calculate the width and height of the container
    const width = right - left;
    //area between the two lines will always be limited by the shorter line
    const height = Math.min(height[left], height[right]);
    //calculate the area
    const currentArea = width * height;
    //update the maximum area
    maxArea = Math.mmax(currentArea, maxArea);
    //move the pointers inward
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};

const computeRectangleArea = (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) => {
  const findOverlapX = findOverlap(ax1, ax2, bx1, bx2);
  const findOverlapY = findOverlap(ay1, ay2, by1, by2);
  const greenRectangle = computeInnerArea(
    Math.abs(ax1 - ax2),
    Math.abs(ay1 - ay2)
  );
  const blueRectangle = computeInnerArea(
    Math.abs(bx1 - bx2),
    Math.abs(by1 - by2)
  );
  const redOverlap = computeInnerArea(findOverlapX, findOverlapY);
  return greenRectangle + blueRectangle - redOverlap;
};

const computeInnerArea = (base, height) => {
  return base * height;
};

const findOverlap = (a1, a2, b1, b2) => {
  const minRight = Math.min(a2, b2);
  const maxLeft = Math.max(a1, b1);
  return Math.max(0, minRight - maxLeft);
};
//time: O(e), space: O(n)
const hasPathDFS = (graph, src, dst) => {
  if (src === dst) return true;
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) return true;
  }
  return false;
};
//time: O(e), space: O(n)
const hasPathBFS = (graph, src, dst) => {
  const queue = [src];

  while (queue.length) {
    const current = queue.shift();
    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};

//GIVEN EDGES -> BUILD GRAPH
const undirectedPath = (edges, nodeA, nodeB) => {
  //make an adjacency list
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
  //iterate over the adjcancy list to check for a path from nodeA to nodeB
};

const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};
//KNOW THERE IS A PATH BETWEEN SRC AND NEIGHBOR -> SO AS YOU TRAVERSE THROUGH NEIGHBORS IF YOU GET TO THE DESTINATION
//THEN THERE IS A PATH FROM THE SRC TO THE DESTINATION
//WHEN YOU PASS SRC IN THAT IS THE CURRENT ELEMENT YOU ARE AT
const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  //avoids infinite circle
  if (visited.has(src)) return false;
  visited.add(src);
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) return true;
  }
  return false;
};

const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;
  for (const node in graph) {
    if (explore(graph, node, visited) === true) {
      count++;
    }
  }
  return count;
};

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;
  visited.add(String(current));
  //explore currents neighbors
  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }
  return true;
};

const numIslands = (grid) => {
  let counter = 0;

  const dfs = (i, j) => {
    if (
      i >= 0 &&
      j >= 0 &&
      i < grid.length &&
      j < grid[i].length &&
      grid[i][j] === '1'
    ) {
      grid[i][j] = '0';
      dfs(i + 1, j); // top
      dfs(i, j + 1); // right
      dfs(i - 1, j); // bottom
      dfs(i, j - 1); // left
    }
  };

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === '1') {
        counter += 1;
        dfs(i, j);
      }
    }
  }

  return counter;
};

const numIslands2 = grid => {
  const m = grid.length, n = grid[0].length;
  let total = 0;
  
  const processIsland = (i, j) => {
    grid[i][j] = 0;
    
    if (i > 0 && grid[i - 1][j])
      processIsland(i - 1, j);
    if (i < m - 1 && grid[i + 1][j])
      processIsland(i + 1, j);
    if (j > 0 && grid[i][j - 1])
      processIsland(i, j - 1);
    if (j < n - 1 && grid[i][j + 1])
      processIsland(i, j + 1);
  };
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        total++;
        processIsland(i, j);
      }
    }
  }
  
  return total;
}