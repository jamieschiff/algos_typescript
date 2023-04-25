//https://www.techinterviewhandbook.org/best-practice-questions/
//https://medium.datadriveninvestor.com/curated-list-the-top-most-frequently-asked-coding-questions-you-should-practice-3f8b5ec42ca0
//https://mlengineer.io/common-leetcode-questions-by-categories-532b301130b
//https://leetcode.com/problemset/all/?page=1&listId=wpwgkgt&sorting=W3sic29ydE9yZGVyIjoiREVTQ0VORElORyIsIm9yZGVyQnkiOiJBQ19SQVRFIn1d
//https://github.com/andavid/leetcode-java/blob/master/top-interview-questions-medium.md
//https://medium.com/@koheiarai94/60-leetcode-questions-to-prepare-for-coding-interview-8abbb6af589e

const { get } = require('http');

/* TWO SUM */
const twoSum = (array, target) => {
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const difference = target - current;
    if (map.has(difference)) {
      return true;
    } else {
      map.set(current, true);
    }
  }
  return false;
};

/* THREE SUM */
//i : array
//o : boolean
// sort the array
//iterate over the array
const threeSum = (array, target) => {
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    let low = i + 1;
    let high = array.length - 1;
    let sum = 0;
    while (low < high) {
      sum = array[i] + array[low] + array[high];
      if (sum === target) return [array[i], array[low], array[high]];
      if (sum < target) low++;
      if (sum > target) high--;
    }
  }
  return null;
};

//THREE SUM WITH DUPLICATE CHECKS

const threeSum2 = (nums) => {
  //i: array of numbers
  //o: array of arrays => triplet values that add up to 0
  if (nums.length < 3) return [];
  const result = [];
  nums.sort((a, b) => a - b);
  for (let start = 0; start < nums.length - 2; start++) {
    if (start > 0 && nums[start] === nums[start - 1]) continue;
    let middle = start + 1;
    let end = nums.length - 1;
    let target = 0;
    while (middle < end) {
      currentSum = nums[start] + nums[middle] + nums[end];
      if (currentSum === target) {
        result.push([nums[start], nums[middle], nums[end]]);
        while (nums[middle] === nums[middle + 1]) middle++;
        while (nums[end] === nums[end - 1]) end--;
        middle++;
        end--;
      } else if (currentSum < target) {
        middle++;
      } else {
        end--;
      }
    }
  }
  return result;
};

/* TWO SUM CLOSEST */

/* THREE SUM CLOSEST */

const threeSumClosest = (nums, target) => {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  for (let start = 0; start < nums.length; start++) {
    let middle = start + 1;
    let end = nums.length - 1;
    while (middle < end) {
      const currentSum = nums[start] + nums[middle] + nums[end];
      // const currentDifference = currentSum - target)
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target))
        closestSum = currentSum;
      if (currentSum === target) return currentSum;
      if (currentSum > target) {
        end--;
      } else {
        middle++;
      }
    }
  }
  return closestSum;
};

const validParens = (s) => {
  const parensMap = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (parensMap.hasOwnProperty(current)) {
      stack.push(current);
    } else if (parensMap[stack.pop()] !== current) {
      return false;
    }
  }
  return stack.length === 0 ? true : false;
};

const lengthOfLongestSubstring = (s) => {
  //case sensitivity? non-alphanumeric?
  if (s.length === 0) return 0;
  const set = new Set();
  let slow = 0;
  let fast = 0;
  let longest = 0;
  while (fast < s.length) {
    const current = s[fast];
    if (!set.has(current)) {
      set.add(current);
      longest = Math.max(longest, fast - slow + 1);
      fast++;
    } else {
      //if the character has already been added
      set.delete(s[slow]);
      slow++;
    }
  }
  return longest;
};

/* MERGE INTERVALS */

const mergeIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const mostRecent = result[result.length - 1];
    if (mostRecent[1] >= current[0]) {
      mostRecent[1] = Math.max(mostRecent[1], current[1]);
    } else {
      result.push(current);
    }
  }
  return result;
};

/* INSERT INTERVAL */
const insertInterval = (intervals, newInterval) => {
  //sort the intervals
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);
  // .sort((a, b)=> a[0]-b[0])
  //where newIntervals[0] > intervals[0]
  console.log(intervals);
  let result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const previous = result[result.length - 1];
    if (intervals[i][0] <= previous[1]) {
      previous[1] = Math.max(previous[1], intervals[i][1]);
    } else {
      result.push(intervals[i]);
    }
  }
  return result;
  //check for merges and if there are merge them
};

/* GROUP ANAGRAMS */
const groupAnagrams = (strs) => {
  const tracker = {};
  for (let i = 0; i < strs.length; i++) {
    const currentSorted = strs[i].split('').sort().join('');
    if (!tracker[currentSorted]) {
      tracker[currentSorted] = [strs[i]];
    } else {
      tracker[currentSorted].push(strs[i]);
    }
  }
  return Object.values(tracker);
};
/* PRODUCT OF ARRAY EXCEPT SELF */
const productExceptSelf = function (nums) {
  let product = 1;
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (current === 0) zeroCount++;
    else product *= current;
  }
  if (zeroCount > 1) {
    return Array(nums.length).fill(0);
  } else if (zeroCount === 1) {
    return nums.map((element, index) => {
      if (element !== 0) return 0;
      else return product;
    });
  } else {
    return nums.map((element) => {
      return product / element;
    });
  }
};

/* LENGTH OF LAST WORD */
const lengthOfLastWord = (s) => {
  let index = s.length - 1;
  let output = 0;

  while (s[index] === ' ' && index >= 0) index -= 1;

  while (s[index] !== ' ' && index >= 0) {
    output += 1;
    index -= 1;
  }
  return output;
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

/* Increasing Triplet Sequence */
const increasingTriplet = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const currentIndex = i;
    const currentNum = nums[i];
    const nextIndex = i + 1;
    const nextNum = nums[nextIndex];
    const nextNextIndex = i + 2;
    const nextNextNum = nums[nextNextIndex];
    console.log(
      'this is current num: ',
      currentNum,
      'this is next num: ',
      nextNum,
      'this is next next num: ',
      nextNextNum
    );
    if (
      currentNum < nextNum &&
      currentNum < nextNextNum &&
      nextNum < nextNextNum
    ) {
      if (
        currentNum === undefined ||
        nextNextNum === undefined ||
        nextNum === undefined
      )
        continue;
      return true;
    }
  }
  return false;
};

const nums = [20, 100, 10, 12, 5, 13];
console.log(increasingTriplet(nums));

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
/* Generate Parentheses */

const generateParens = (n) => {
  let result = [];
  const generate = (str, open, close) => {
    if (open > n || close > n || open > close) return;
    if (str.length === n * 2 && open === close) {
      res.push(str);
      return;
    }
    generate(str + '(', open + 1, close);
    generate(str + ')', open, close + 1);
  };
  generate('', 0, 0);
  return result;
};

const generateParenthesis2 = (n) => {
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

/* Permutations */

const permutations = (nums) => {
  const result = [];
  if (nums.length === 1) return [[...nums]];
  if (nums.length === 2)
    return [
      [nums[0], nums[1]],
      [nums[1], nums[0]],
    ];
  for (let i = 0; i < nums.length; i++) {
    //remove the first element and save it in a variable
    const n = nums.shift();
    const perms = permutations(nums);
    //traverse each of the permutations called by the recursive call
    for (let perm of perms) {
      //add back the number we removed earlier to reduce the problem size back to the permutation array
      perm.push(n);
      result.push(perm);
    }
    //add the element we removed back
    nums.push(n);
  }
  return result;
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

console.log(getPermutations('abc'));

/* Subsets */
const subsets = (array) => {
  const result = [];
  //declare array outside of generate function so that we have global access to it inside of our helper function
  const subset = [];
  const generateSubsets = (index) => {
    //base case : if index is out of bounds - when we get to our base case know we have reached our leaf nodes... want to pass in the elements from the curent subset
    if (index === array.length) return result.push(subset.slice());
    //include the current element
    subset.push(array[index]);
    generateSubsets(index + 1);
    //dont include current element - skipping array[i]
    subset.pop();
    generateSubsets(index + 1);
  };
  generateSubsets(0);
  return result;
};

/* Num Islands:
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
*/

// const numIslands = (graph)

/* Kth Smallest Element in BST */

/* MAXIMUM PRODUCT SUM */

/* SEARCH IN ROTATED SORTED ARRAY */

/* CONTAINER WITH MOST WATER */

/* FIND MINIMUM IN ROTATED SORTED ARRAY */

/* LONGEST REPEATING CHARACTER REPLACEMENT */

/* LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS */

/* REMOVE NTH NODE FROM END OF LIST */

/* PALINDROMIC SUBSTRINGS */

/* PACIFIC ATLANTIC WATER FLOW - https://leetcode.com/problems/pacific-atlantic-water-flow/ */

/* VALID BST */

/* NON-OVERLAPPING INTERVALS */

/* TOP K FREQUENT ELEMENTS */

/* CLONE GRAPH */

/* COURSE SCHEDULE */

/* BINARY TREE LEVEL ORDER TRAVERSAL */

/* ENCODE AND DECODE STRINGS:

Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:

string encode(vector<string> strs) {
  // ... your code
  return encoded_string;
}
Machine 2 (receiver) has the function:
vector<string> decode(string s) {
  //... your code
  return strs;
}
So Machine 1 does:

string encoded_string = encode(strs);
and Machine 2 does:

vector<string> strs2 = decode(encoded_string);
strs2 in Machine 2 should be the same as strs in Machine 1.

Implement the encode and decode methods.

You are not allowed to solve the problem using any serialize methods (such as eval).



*/

/* MEETING ROOMS:
Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.
*/

/* MEETING ROOMS 2:
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.
*/

/* GRAPH VALID TREE:
You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

Return true if the edges of the given graph make up a valid tree, and false otherwise.
 */

/*  NUMBER OF CONNECTED COMPONENTS IN A UNDIRECTED GRAPH:
You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph.
*/

/* LETTER COMBINATIONS OF A PHONE NUMBER:
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/

/* COIN CHANGE */

/* IS ANAGRAM */

const isAnagram = (string1, string2) => {
  const makeAnagramMap = (string) => {
    const map = new Map();
    for (let i = 0; i < string.length; i++) {
      const current = string[i];
      if (!map.has(current)) {
        map.set(current, 1);
      } else {
        map.set(current, map.get(current) + 1);
      }
    }
    return map;
  };
  const mapString1 = makeAnagramMap(string1);
  const mapString2 = makeAnagramMap(string2);
  let anagramResult = true;
  mapString1.forEach((value, key) => {
    if (!mapString2.has(key) || mapString2.get(key) !== value) {
      anagramResult = false;
    }
  });
  return anagramResult;
};

/* GROUP ANAGRAMS */

/* Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets. */

function threeSum3(nums) {
  const results = [];
  if (nums.length < 3) return results;

  nums = nums.sort((a, b) => a - b); // O(n log n)

  let target = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    // O(n)
    if (nums[i] > target) break; //O(1)

    if (i > 0 && nums[i] === nums[i - 1]) continue; //O(1)

    let j = i + 1;

    let k = nums.length - 1;
    while (j < k) {
      //O(n)
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        results.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++; //O(n)
        while (nums[k] === nums[k - 1]) k--; //O(n)
        j++;
        k--;
      } else if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return results;
}

function isPalindromePermutation(input) {
  // Convert input to lowercase and remove non-alphanumeric characters
  const cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Create a hash map to store character frequencies
  const charFreq = new Map();

  // Loop through each character in the cleaned input
  for (let char of cleanedInput) {
    if (charFreq.has(char)) {
      // If character already exists in the hash map, increment the frequency
      charFreq.set(char, charFreq.get(char) + 1);
    } else {
      // Otherwise, add the character to the hash map with frequency 1
      charFreq.set(char, 1);
    }
  }

  let oddFreqCount = 0; // Keep track of count of characters with odd frequencies

  // Loop through each character frequency in the hash map
  for (let freq of charFreq.values()) {
    if (freq % 2 !== 0) {
      // If a character has an odd frequency, increment the count
      oddFreqCount++;
    }
  }

  // If there are more than one characters with odd frequencies, return false
  // as a palindrome permutation must have at most one character with an odd frequency
  return oddFreqCount <= 1;
}

//i: array of objects with startTime and endTime
const mergeMeetings = (array) => {
  array.sort((a, b) => a.startTime - b.startTime);
  console.log(array);
};

const test = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
];
console.log(mergeMeetings(test));

//  [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]

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

/* SEARCH IN ROTATED SORTED ARRAY */

var search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) return middle;
    if (nums[start] <= nums[middle]) {
      if (nums[start] <= target && target <= nums[middle]) {
        //target is on left side
        end = middle - 1;
      } else {
        //target is on right
        start = middle + 1;
      }
    } else {
      if (nums[middle] <= target && target <= nums[end]) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
  }
  return -1;
};
