//https://www.techinterviewhandbook.org/best-practice-questions/
//https://medium.datadriveninvestor.com/curated-list-the-top-most-frequently-asked-coding-questions-you-should-practice-3f8b5ec42ca0
//https://mlengineer.io/common-leetcode-questions-by-categories-532b301130b
//https://leetcode.com/problemset/all/?page=1&listId=wpwgkgt&sorting=W3sic29ydE9yZGVyIjoiREVTQ0VORElORyIsIm9yZGVyQnkiOiJBQ19SQVRFIn1d
//https://github.com/andavid/leetcode-java/blob/master/top-interview-questions-medium.md
//https://medium.com/@koheiarai94/60-leetcode-questions-to-prepare-for-coding-interview-8abbb6af589e

/* TWO SUM */
//GIVEN AN ARRAY OF NUMBERS AND A TARGET, ARE THERE TWO NUMBERS THAT SUM TO THE TARGET?
//QUESTIONS: are they all positive numbers? are they all whole numbers? are there duplicates? if so, can they be included? can i assume the array is not sorted? in terms of input array size, should we assume a very large set of numbers? my gut would say to prioritize time complexity, but want to make sure this is the same from your perspective?
// returning boolean? or would it be helpful to return the indices where these digits lie?
// const twoSum = (arr, target) => {
//   //edge case
//   if(arr.length < 2 || typeof target !== 'number') return 'invalid input'
//   //hashmap to store values we have visited
//   const hashMap = {}
//   //iterate over the array
//   for (let i = 0; i < arr.length; i++){
//     //variable to store the current element
//     const currentNumber = arr[i]
//     //variable to store the compliment btwn the current element and the target
//     const compliment = target - currentNumber
//     //check if hte map has the compliment
//     if(hashMap[compliment]){
//       //return true
//       return true
//     } else {
//       hashMap[currentNumber] = true
//     }
//     //otherwise, we will add the current element to the map
//   }
//   return false
//   //return false
// }
const twoSumReturnIndices = (arr, target) => {
  //edge case
  if (arr.length < 2 || typeof target !== 'number') return 'invalid input';
  //hashmap to store values we have visited
  const hashMap = {};
  //iterate over the array
  for (let i = 0; i < arr.length; i++) {
    //variable to store the current element
    const currentNumber = arr[i];
    //variable to store the compliment btwn the current element and the target
    const compliment = target - currentNumber;
    //check if hte map has the compliment
    if (hashMap[compliment]) {
      //return true
      return [hashMap[compliment], i];
    } else {
      hashMap[currentNumber] = i;
    }
    //otherwise, we will add the current element to the map
  }
  return [-1, -1];
  //return false
};

// const nums = [5, 2, 7, 1, 4]
// const targetTrue = 11
// const targetFalse = 25
// const invalidInput = 'six'
// console.log(twoSumReturnIndices(nums, targetTrue))
// console.log(twoSumReturnIndices(nums, targetFalse))
// console.log(twoSumReturnIndices(nums, invalidInput))

/* THREE SUM : Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.*/
//i: array
//o: array of arrays
const threeSum = (array) => {
  const resultArray = [];
  if (!Array.isArray(array) || array.length < 3) return 'invalid input';
  //sort the array
  array.sort((a, b) => a - b);
  //if the first element > 0 return []
  if (array[0] >= 0) return [];
  //iterate over the array
  for (let i = 0; i < array.length - 2; i++) {
    //middle pointer between i and end  -> increment this while i and end are anchored to their positions
    //increment i once middle and end meet
    let middle = i + 1;
    //right most element
    let end = array.length - 1;
    let targetSum = 0;
    //i represents left most number in our sorted set -> once this hits 0 we can break because three positive numbers cannot sum to 0
    if (array[i] > targetSum) break;
    //to avoid duplicates
    if (i > 0 && array[i] === array[i - 1]) continue;
    while (middle < end) {
      //calcululate current sum
      const currentSum = array[i] + array[middle] + array[end];
      //current sum = 0 -> push array of values
      if (currentSum === targetSum) {
        resultArray.push([array[i], array[middle], array[end]]);
        //continue incrementing and decrementing middle and end as long as those values are duplicated
        while (array[middle] === array[middle + 1]) middle++;
        while (array[end] === array[end - 1]) end--;
        //once we have skipped duplicates, move middle and end to the next unique elements
        middle++;
        end--;
      }
      //current sum less than 0 => incremenet left
      else if (currentSum < targetSum) middle++;
      //current sum greater than 0 => decrement right
      else if (currentSum > targetSum) end--;
    }
  }
  return resultArray;
};

const twoSumClosest = (arr, target) => {
  if (arr.length < 2 || typeof target !== 'number') return 'invalid input';
  //variable to store the minimum difference thus far
  let minimumDifference = Infinity;
  //sort the array in ascending order-> then use two pointers starting at the beginning and the end of the array
  arr.sort((a, b) => a - b);
  //variables for start and end position
  let start = 0;
  let end = arr.length - 1;
  //iterate while start is less than end
  while (start < end) {
    // console.log('this is the min difference: ', minimumDifference)
    //calculate the current sum & current difference
    const currentSum = arr[start] + arr[end];
    const currentDifference = Math.abs(target - currentSum);
    //if difference equals tqrget return the indices
    if (currentDifference === 0) return 0;
    //check if less than current difference
    if (currentDifference < minimumDifference)
      minimumDifference = currentDifference;
    //if less, incremeent start
    if (currentSum > target) end--;
    // if higher, decrement end
    if (currentSum < target) start++;
  }
  //return closest indices
  return minimumDifference;
};


const checkForObj = (element) => {
  if (typeof element === 'object' && !Array.isArray(element)) return true;
  else return false;
};

const obj = {
  jamie: 'schiff',
};
// const array = ['jamie schfif']
// console.log(checkForObj(obj))
// console.log(checkForObj(array))

/* THREE SUM CLOSEST */

/* CONTAINS DUPLICATES : Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.*/
//QUESTIONS: only whole numbers? negatives?
const containsDuplicates = (array) => {
  //if duplicates - return true
  // no duplicates - return false
  const set = new Set();
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (!set.has(current)) set.add(current);
    else return true;
  }
  return false;
};
// const pass = [1,2,3,3]
// const fail = [1,2,3]

/* BEST TIME TO BUY AND SELL STOCK : 
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 */

const maxProfit = (array) => {
  if (array.length < 2) return 0;
  let maxGain = 0;
  let minPrice = array[0];
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (typeof current !== 'number') continue;
    minPrice = Math.min(minPrice, current);
    maxGain = Math.max(maxGain, current - minPrice);
  }
  return maxGain;
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

const isAnagram = (str1, str2) => {
  const process = (str) => {
    const obj = {};
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < str.length; i++) {
      //O(n)
      const current = str[i].toLowerCase();
      if (current === ' ' || !alphabet.includes(current)) continue;
      if (obj[current]) {
        obj[current]++;
      } else {
        obj[current] = 1;
      }
    }
    return obj;
  };
  const hashMap1 = process(str1);
  const hashMap2 = process(str2);
  let result = true;
  //check the values to make sure they are equal
  for (const [key, value] of Object.entries(hashMap1)) {
    if (hashMap2[key] !== value) result = false;
    else continue;
  }
  return result;
};

// const str1True = 'laP';
// const str2True = 'pal';
// const str1False = 'bye'
// const str2False = 'sky'
// console.log(isAnagram(str1True, str2True));
// console.log(isAnagram(str1False, str2False))

const validParens = (string) => {
  const parensMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  //cant have a closing parens first or an opening parens last
  if (string.length === 1) return false;
  const stack = [];
  //iterate over the array
  for (let i = 0; i < string.length; i++) {
    const current = string[i];
    //if the parens is in the map
    if (parensMap.hasOwnProperty(current)) {
      stack.push(current);
    } else if (parensMap[stack.pop()] !== current) {
      return false;
    }
  }
  return stack.length === 0 ? true : false;
};

const maxSubarray = (array) => {
  if (!array.length) return 0;
  let maxSum = array[0];
  let currentSum = array[0];
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    currentSum = Math.max(current, currentSum + current);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSubarray(nums)); //6

/* LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS */
//account for 0 indexed - ie end-start+1
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

const string1 = 'abcabcbb'; //3
const string2 = 'bbbbb'; //1
const string3 = 'pwwkew'; //3
// console.log(maxSubstringWithoutRepeating(string1))
// console.log(maxSubstringWithoutRepeating(string2))
// console.log(maxSubstringWithoutRepeating(string3))



//TIME COMPLEXITY: O(n * k log k) -> where n is length of input array and k is length of the longest stirng
//SPACE COMPLEXITY: determined by the space of the hashmap used to store the grouped anagram - in worst case if they are all distinct strings will have a spot for each one
const groupAnagrams = (array) => {
  const hashMap = {};
  for (let i = 0; i < array.length; i++) {
    //.split() = O(k) where k is the lenght of the string -> splitting into array of characters
    //.sort() = O(k log k) -> where k is length of the longest string, comparison based algrithm
    //.join() = O(k) => joining characters back together is proportional to the length of the string
    const current = array[i].split('').sort().join('');
    // const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // if (array[i] === ' ' || !alphabet.includes(array[i])) continue;
    if (hashMap[current]) {
      hashMap[current].push(array[i]);
    } else {
      hashMap[current] = [];
      hashMap[current].push(array[i]);
    }
  }
  //Object.values => O(n) -> time it takes to create the output array it returns is proportional to the number of properties in the object
  return Object.values(hashMap);
};


const subsets = (array) => {
  const result = [];
  //declare array outsoide of generate function so that we have global access to it inside of our helper function
  const subset = [];
  const generateSubsets = (index) => {
    //base case : if index is out of bounds - when we get to our base case know we have reached our leaf nodes... want to pass in the elements from the curent subset
    if (index == array.length) return result.push([...subset]);
    // if (index == array.length) return result.push(subset.slice())

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

const array = [1, 2, 3];
console.log(subsets(array));

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


/* FIND MIN ROTATED SORTED ARRAY : 
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

*/

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

/* Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets. */

//EXPONENT TUTORIAL
// function threeSum(nums) {
//   const results = [];
//   if (nums.length < 3) return results;

//   nums = nums.sort((a, b) => a - b); // O(n log n)

//   let target = 0;

//   for (let i = 0; i < nums.length - 2; i++) {
//     // O(n)
//     if (nums[i] > target) break; //O(1)

//     if (i > 0 && nums[i] === nums[i - 1]) continue; //O(1)

//     let j = i + 1;

//     let k = nums.length - 1;
//     while (j < k) {
//       //O(n)
//       let sum = nums[i] + nums[j] + nums[k];
//       if (sum === target) {
//         results.push([nums[i], nums[j], nums[k]]);
//         while (nums[j] === nums[j + 1]) j++; //O(n)
//         while (nums[k] === nums[k - 1]) k--; //O(n)
//         j++;
//         k--;
//       } else if (sum < target) {
//         j++;
//       } else {
//         k--;
//       }
//     }
//   }

//   return results;
// }

/* ISOPHORMIC */

// const isIsomorphic = (s, t) =>{
//   const map = new Map();

//   for (let i = 0; i < s.length; i++) {
//     const charS = s[i], charT = t[i];
//     console.log('this is charS: ', charS)
//     console.log('this is charT: ', charT)
//     const mapped = map.get(charS);
//     if (mapped && mapped !== charT) return false;
//     map.set(charS, charT);
//     console.log('this is map: ', map)
//   }

//   const unique = new Set();
//   for (const value of map.values()) {
//     // console.log(unique)
//     if (unique.has(value)) return false;
//     unique.add(value);
//   }

//   return true;
// };

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

// const true1 = 'egg';
// const true2 = 'add';
// console.log(isIsomorphic(true1, true2));
// const false1 = 'foo';
// const false2 = 'bar';
// console.log(isIsomorphic(false1, false2));

/* REVERSE WORDS IN A STRING: 
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
*/

/* INSERTION SORT */

/* SELECTION SORT */

/* BST PRE-ORDER */

/* BST POST-ORDER */

/* BST IN-ORDER */

/* WORD BREAK :
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.
*/

/* PERMUTATION IN STRING */
const checkInclusion = (str1, str2) => {
  //if the substring is longer than the string, return false
  if (str1.length > str2.length) return false;
  const substringMap = new Map();
  for (let i = 0; i < str1.length; i++) {
    const current = str1[i];
    substringMap.set(current, (substringMap.get(current) || 0) + 1);
  }
  let start = 0;
  let end = 0;
  //what the size of the window should be
  let windowSize = str1.length;
  //number of unique characters to collect
  let counter = substringMap.size;
  while (end < str2.length) {
    const currentChar = str2[end];
    if (substringMap.has(currentChar))
      substringMap.set(currentChar, substringMap.get(currentChar) - 1);
    //we collected all occurrences of this character-> only decremenet once it equals 0
    //used to capture unique characters = aka one less uniqueue character is needed!!
    if (substringMap.get(currentChar) === 0) counter--;
    //when we have collected all occurrences of every character in s1
    while (counter === 0) {
      //we hhave all occurences and the window is the size of the substring
      if (end - start + 1 === windowSize) return true;
      if (substringMap.has(str2[start])) {
        substringMap.set(str2[start], substringMap.get(str2[start]) + 1);
      }
      if (substringMap.get(str2[start]) === 1) counter++;
      start++;
    }
    end++;
  }
  return false;
};

//NON SLIDING WINDOW SOLUTION
const checkInclusion2 = (s1, s2) => {};

const partition = (s) => {
  const result = [];
  const current = [];
  const isPalindrome = (str) => {
    let start = 0;
    let end = str.length - 1;
    while (start < end) {
      if (str[start] !== str[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  };

  const backtrack = (startIndex) => {
    //base case: reached the end of a string -> add current posiition to the result
    if (startIndex === s.length) {
      result.push([...current]);
    } else {
      for (let i = startIndex; i < s.length; i++) {
        //try each possible partition, starting from the start index
        const substring = s.slice(startIndex, i + 1);
        if (isPalindrome(substring)) {
          //if the substring is a palindrome, add it to the current partition
          current.push(substring);
        }
        //recursively backtrack to find more partitions
        backtrack(i + 1);
        //remove the last added palindrome from current partition for backtracking
        current.pop();
      }
    }
  };
  backtrack(0);
  return result;
};

/* PERMUTATIONS */

const permutations = (items) => {
  const result = [];
  const current = [];
  const swap = (items, i, j) => {
    const temp = items[i];
    items[i] = items[j];
    items[j] = temp;
  };
  const generate = (index) => {
    if (index === items.length) {
      result.push([...items]);
      return;
    }
    for (let i = index; i < items.length; i++) {
      swap(items, index, i);
      generate(index + 1);
      swap(items, index, i);
    }
  };
  generate(0);
  return result;
};

//TIME COMPLEXITY: N! PERMUTATIONS

const permutations2 = (arr) => {
  const result = [];
  const backTrack = (startIndex) => {
    if (startIndex === arr.length) {
      result.push([...arr]);
    } else {
      for (let i = startIndex; i < arr.length; i++) {
        //swap current element with each subsequent element
        [arr[startIndex], arr[i]] = [arr[i], arr[startIndex]];
        //recursively call backtrack to generate permutations
        backTrack(startIndex + 1)[
          //undo the previous swap from backtracking
          (arr[startIndex], arr[i])
        ] = [arr[i], arr[startIndex]];
      }
    }
  };
  //start backtracking from the beginning of the array
  backTrack(0);
  return result;
};

/* RECURSIVE STRING PERMUTATIONS: 
Write a recursive function for generating all permutations of an input string. Return them as a set.
 */

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

// const str = 'abc'
// console.log(getPermutations(str))

const fib = (n, memo = {}) => {
  if (n === 0 || n === 1) return n;
  else if (memo[n]) return memo[n];
  const result = fib(n - 1, memo) + fib(n - 2, memo);
  return (memo[n] = result);
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

// const findAnagrams = (s, p) => {
//   //hash to store the characters and their counts
//   let hash = {};
//   for (let i = 0; i < p.length; i++) {
//     const current = p[i];
//     if (hash[current]) {
//       hash[current]++;
//     } else {
//       //everytime we add a new element to the hash also want to increase our count of unique elements
//       hash[current] = 1;
//     }
//   }
//   const result = [];
//   let left = 0;
//   let right = 0;
//   let count = p.length;
//   while (right < s.length) {
//     const current = s[right];
//     //if the element is in the anagram, decrease the count of that element
//     if (hash[current] && hash[current] > 0) {
//       count--;
//     }
//     hash[current]--;
//     right++;
//     if (count === 0) result.push(left);
//     //if the current window is the size of the anagram
//     if (p.length === right - left) {
//       const currentLeft = s[left];
//       //if the character left behind is needed for the anagram
//       if (hash[currentLeft] >= 0) count++;
//       //increase the characters value in the hashtable => restore the need for that character
//       hash[currentLeft]++;
//       //increase the number of characters we need
//       // count++;
//       left++;
//     }
//   }
//   return result;
// };

// const s = 'cbaebabacd';
// const p = 'abc';
// console.log(findAnagrams(s, p));

const findAnagrams2 = (s, p) => {
  if (p.length > s.length) return [];
  const charFreq = {};
  for (const char of p) {
    if (charFreq[char]) charFreq[char]++;
    charFreq[char] = 1;
  }
  const result = [];
  let slow = 0;
  while (slow < s.length) {
    let fast = 0;
    const charFreqCopy = { ...charFreq };
    while (fast < p.length) {
      const currLetter = s[slow + fast];
      //if the current character is not in the anagram or weve already seen it the amount of times we want to
      //break out of the loop
      if (!(charFreqCopy[currLetter] || charFreqCopy[currLetter] <= 0)) {
        break;
      } else {
        charFreqCopy[currLetter]--;
        fast++;
      }
    }
    if (fast === p.length) {
      result.push(slow);
      slow = slow + fast;
      // fast++;
    } else {
      slow++;
    }
  }
  return result;
};

// const s = 'cbaebabacd';
// const p = 'abc';
// console.log(findAnagrams2(s, p)); //[0,6]

const findAnagrams3 = (s, p) => {
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
// const s = 'cbaebabacd';
// const p = 'abc';
// console.log(findAnagrams3(s, p)); //[0,6]

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
// const intervals = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [1, 3],
// ]; //1
// console.log(eraseOverlapIntervals(intervals));
// const intervals2 = [
//   [1, 2],
//   [1, 2],
//   [1, 2],
// ];
// console.log(eraseOverlapIntervals(intervals2));
// const intervals3 = [
//   [1, 100],
//   [11, 22],
//   [1, 11],
//   [2, 12],
// ];
// console.log(eraseOverlapIntervals(intervals3));

// s = cbaebabacd
// p = abc
// slow = 3
// fast = 3
//cache ={a: 0, b: 0, c:0}
// currLetter = s[2] = a

var insert = (intervals, newInterval) => {
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

// const intervals = [[1,3],[6,9]]
// const newInterval = [2,5]
// console.log(insert(intervals, newInterval))

const maxArea = (height) => {
  //area of container is limited by the smallest side - need ot know smallest side every iteration
  //area: (right - left) * smallestSide
  //area > result -> result = area
  //when moving right or left pointer -> want to get rid of smallest side
  let result = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let smallestSide = Math.min(height[left], height[right]);
    let area = (right - left) * smallestSide;
    if (area > result) result = area;
    //if the left side is currently smaller - increment that
    if (height[left] < height[right]) left++;
    else right--;
  }
  return result;
};

function missingNumber(nums) {
  const n = nums.length;
  const totalSum = (n * (n + 1)) / 2; // Sum of numbers from 0 to n
  const actualSum = nums.reduce((acc, curr) => acc + curr, 0); // Sum of numbers in the nums array
  return totalSum - actualSum; // Difference between the total sum and actual sum is the missing number
}

// console.log((2 * (2 + 1)) / 2)

const findMinRotatedSortedArray = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  // let min = undefined
  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] < nums[right]) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }
  return nums[left];
};

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

const wordSearch = (board, word) => {
  const numRows = board.length;
  const numColumns = board[0].length;
  let result = false;

  const explore = (row, column, index) => {
    //check if in bounds
    if (
      row < 0 ||
      column < 0 ||
      (row >= board.length) | (column >= board[0].length)
    )
      return false;
    if (board[row][column] !== word[index]) reutrn;
    if (i === word.length - 1) {
      result = true;
      return;
    }
    //mark current spot as null
    board[row][column] === null;
    //explore all directions
    if (
      explore(board, word, row + 1, column, index + 1) ||
      explore(board, word, row - 1, column, index + 1) ||
      explore(board, word, row, column + 1, index + 1) ||
      explore(board, word, row, column - 1, index + 1)
    ) {
      return true;
    }
    //reset the board
    board[row][column] = word[i];
  };
  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numColumns; c++) {
      if (board[r][c] === word[0] && explore(r, c, 0)) {
        return true;
      }
    }
    return false;
  }
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

const a = [1, 5, 8, 3, 0, 5, 9, 4];
console.log(quickSort(a));

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
        // console.log('hitting')
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

const retrieveDepth = (arr, depth) => {
  const results = [];

  const process = (arr, depth) => {
    if (depth === 0) return;

    arr.forEach((el) => {
      if (Array.isArray(el)) process(el, depth - 1);
      else results.push(el);
    });
  };

  process(arr, depth);
  return results;
};


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