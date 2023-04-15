/* TWO SUM */

const twoSum = (nums, target) => {
  const map = new Map()
  for (let i = 0; i < nums.length; i++){
      const current = nums[i]
      //declare a variable to store the difference between the target and the current element
      const difference = target - current
      //check if the map has the difference 
      if(map.has(difference)){
          return [map.get(difference), i]
      } else {
          map.set(current, i)
      }
      //if it does, return true
      //if it doesnt, add the current element and the index to the map
  //return false
  }
  return false 
};

/* THREE SUM:

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

*/

var threeSum = function(nums) {
  nums = nums.sort((a,b)=> a-b)
  for (let i = 0; i< nums.length; i++){
      const current = nums[i]
      if(current > 0){
          break
      } else if (current === nums[i+1]){
          continue
      } else {
          twoSum(nums, index)
      }
  }
};

const twoSum = (array, index) => {
  let left = index + 1
  let right = array.length-1
  while(left < right){
      const currentSum = array[index] + array[left] + array[right]
      if(currentSum < 0){
          left++
      } else if (currentSum > 0){
          right--
      } else 
  }
}

/* TWO SUM CLOSES */

/* THREE SUM CLOSEST */

/* CONTAINS DUPLICATES:

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

*/

var containsDuplicate = function(nums) {
  const visited = new Set();
  for (let i = 0; i < nums.length; i++) {
      if (visited.has(nums[i])) {
          return true;
      } else {
          visited.add(nums[i]);
      };
  };
  return false;
};

/* BEST TIME TO BUY AND SELL STOCK:

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/

var maxProfit = function(prices) {
  let _maxProfit = 0, buyPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
      _maxProfit = Math.max(_maxProfit, prices[i] - buyPrice);

      buyPrice = Math.min(buyPrice, prices[i]);
  }

  return _maxProfit;
};

var maxProfit2 = function(prices) {
  let maxProf = 0, buyPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
      if (prices[i] > buyPrice) maxProf = Math.max(maxProf, prices[i] - buyPrice);

      if (prices[i] < buyPrice) buyPrice = prices[i];
  }

  return maxProf;
};


/* VALID ANAGRAM:

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

*/

var isAnagram = function(s, t) {
  t = t.split('').sort().join()
  if (s === t) return true
  else return false
};

var isAnagram2 = function(s, t) {
  s = s.split("").sort()
  t = t.split("").sort()

  if (s.length !== t.length)
      return false;

  for (var i = 0; i < s.length; i++)
      if (s[i] !== t[i])
          return false;

  return true;
};

/* VALID PARENTHESES:

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

*/

var isValid = function (brackets) {
  // Define a constant object that maps opening brackets to their corresponding closing brackets
  const closingBracketFor = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  // Define an empty array to store opening brackets
  const openingBrackets = [];

  // Loop over each character in the input string
  for (const bracket of brackets) {
    // If the bracket is an opening bracket, push it onto the openingBrackets array
    if (bracket in closingBracketFor) {
      openingBrackets.push(bracket);
    } 
    // If the bracket is a closing bracket
    // check if it matches the most recent opening bracket in the openingBrackets array
    // and return false if it does not match or the openingBrackets array is empty
    else if (closingBracketFor[openingBrackets.pop()] !== bracket) {
      return false;
    }
  }

  // If the openingBrackets array is empty, return true (brackets are balanced)
  // Otherwise, return false (some opening brackets were not matched with closing brackets)
  return openingBrackets.length === 0;
};

/* MAXIMUM SUBARRAY:

Given an integer array nums, find the  subarray with the largest sum, and return its sum.

*/

var maxSubArray = (nums) => {
  let maxSum = nums[0]
  let currentSum = nums[0]
  for (let i = 0; i < nums.length; i++){
      currentSum = Math.max(nums[i], currentSum + nums[i])
      maxSum = Math.max(maxSum, currentSum)
  }
  return maxSum
};

/* MAXIMUM NONREPEATING CHARACTERS */

/* MERGE INTERVALS:

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

*/

const merge = (intervals)=> {
  intervals.sort((a,b)=>a[0]-b[0])
  const result = [intervals[0]]
  intervals.forEach((current)=>{
      const lastInterval = result[result.length-1]
      if(lastInterval[1]>=current[0]){
         lastInterval[1] = Math.max(lastInterval[1], current[1])
      } else {
          result.push(current)
      }
  })
  return result
};

/* GROUP ANAGRAMS:

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

*/

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
  const result = Array.from(map.values());

  return result;
};

/* PRODUCT OF ARRAY EXCEPT SELF:

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

*/

var productExceptSelf = function(nums) {
  let zeroCount = 0
  let product = 1
  for (let i = 0; i < nums.length; i++){
      const current = nums[i]
      if (current === 0){
          zeroCount++
      } else {
          product = product * current
      }
  }
  if (zeroCount > 1){
      return new Array(nums.length).fill(0)
  } else if (zeroCount === 0){
      return nums.map((element, i)=>{
          return product/element
      })
  } else {
      return nums.map((element, i)=>{
          if(element === 0){
              return product
          } else {
              return 0
          }
      })
  }
};

/* Set Matrix Zeroes:
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

*/

var setZeroes = function(matrix) {
  const rowSet = new Set(), colSet = new Set()
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!matrix[i][j]) {
        rowSet.add(i);
        colSet.add(j);
      };
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (rowSet.has(i) || colSet.has(j)) matrix[i][j] = 0
    }
  }
};

var setZeroes2 = function(matrix) {
  const m = matrix.length;//row
  const n = matrix[0].length;//col
  let rowZeroIndx = [];
  let colZeroIndx = [];
  
  const map = {};
  
  const getAllIndicesOfZero = (row) => { // get all index with value 0 - column
    return  row.map((e, i) => e === 0 ? i : '').filter(String)
  }
  for(let i=0;i<m;i++){
         map[i] = matrix[i]; // array 
  }
 
  for(let key in map){ // check in every array - 1Darray from matrix or Row wise
      if(map[key].includes(0)){
          rowZeroIndx.push(+key);
          colZeroIndx.push(...getAllIndicesOfZero(map[key]));
      }
  }
  for(let i of rowZeroIndx){
      for(let k=0;k<n;k++){
          matrix[i][k] = 0;
      }
  }
  for(let i of colZeroIndx){
      for(let k=0;k<m;k++){
          matrix[k][i] = 0;
      }
  }
  return matrix;
};

/* LONGEST PALINDROMIC SUBSEQUENCE:

Given a string s, find the longest palindromic subsequence's length in s.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

*/

var longestPalindromeSubseq = function(s) {
  // Get the length of the input string
  const n = s.length;
  // Initialize a 2D array to store the length of the longest palindromic subsequence
  const dp = Array(n).fill().map(() => Array(n).fill(0));
  
  // Iterate over the substrings in reverse order to fill in the dp table bottom-up
  for (let i = n-1; i >= 0; i--) {
      // Base case: the longest palindromic subsequence of a single character is 1
      dp[i][i] = 1;
      for (let j = i+1; j < n; j++) {
          // If the two characters match, the longest palindromic subsequence can be extended by two
          if (s[i] === s[j]) {
              dp[i][j] = 2 + dp[i+1][j-1];
          } else {
              // Otherwise, we take the maximum of the two possible substrings
              dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
          }
      }
  }
  
  // The length of the longest palindromic subsequence is in the top-right corner of the dp table
  return dp[0][n-1];
};

/* Longest Palindromic Substring:
Given a string s, return the longest 
palindromic
 
substring
 in s.
*/

var longestPalindrome = function(s) {
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
  };
  return longestPal;

};

/* Increasing Triplet Sequence:

Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

*/

/* Generate Parentheses */

/* Permutations:

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

*/


/* Subsets:

Given an integer array nums of unique elements, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

*/

/* Word Search */

/* Sort Colors */

/* Num Islands */

/* Kth Smallest Element in BST:

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

*/

/* GROUP ANAGRAMS:

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

*/

const groupAnagrams2 = (strs) => {
  const map = new Map()
  for (let i = 0; i < strs.length; i++){
      const currentSorted = strs[i].split('').sort().join('')
      if(map.has(currentSorted)){
          map.get(currentSorted).push(strs[i])
      } else {
          map.set(currentSorted, [strs[i]])
      }
  }  
  const result = Array.from(map.values());
  
  return result;
};

/* REVERSE A STRING:

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

*/

/* DELETE A NODE IN A LINKED LIST:

There is a singly-linked list head and we want to delete a node node in it.

You are given the node to be deleted node. You will not be given access to the first node of head.

All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.

Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:

The value of the given node should not exist in the linked list.
The number of nodes in the linked list should decrease by one.
All the values before node should be in the same order.
All the values after node should be in the same order.
Custom testing:

For the input, you should provide the entire linked list head and the node to be given node. node should not be the last node of the list and should be an actual node in the list.
We will build the linked list and pass the node to your function.
The output will be the entire list after calling your function.

*/


/* GAME OF LIFE:

According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

*/

var gameOfLife = function(board) {
  const isValid = (r, c) => {
      return (r >= 0 && c >= 0 && r < board.length && c < board[r].length && board[r][c] === 1)
  };

  const countNeighbors = (r, c) => {
      let count = 0;
      if (isValid(r - 1, c - 1)) count += 1; // up left
      if (isValid(r - 1, c + 1)) count += 1; // up right
      if (isValid(r - 1, c)) count += 1; // up
      if (isValid(r, c - 1)) count += 1; // left
      if (isValid(r, c + 1)) count += 1; // right
      if (isValid(r + 1, c - 1)) count += 1; // down left
      if (isValid(r + 1, c)) count += 1; // down
      if (isValid(r + 1, c + 1)) count += 1;
      return count;
  };

  const liveOrDie =  (cellCount, r, c) => {
      // if (r=== 0 && c===2)console.log((cellCount === 2 || cellCount === 3) && board[r][c] === 1)
      if (cellCount <= 1 && board[r][c] === 1) return 0;
      if ((cellCount === 2 || cellCount === 3) && board[r][c] === 1) return 1;
      if (cellCount > 3 && board[r][c] === 1) return 0;
      if (cellCount === 3 && board[r][c] === 0) return 1;
      else return board[r][c];
  };

  const matrix = new Array(board.length);
  for (let i = 0; i < matrix.length; i++) {
      matrix[i] = new Array(board[i].length);
  };

  // console.log(matrix);
  for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
          matrix[r][c] = countNeighbors(r, c);
      }
  };

  for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
          board[r][c] = liveOrDie(matrix[r][c], r, c);
      }
  };
  return board;
};

/* KTH LARGEST ELEMENT IN AN ARRAY 

Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

You must solve it in O(n) time complexity.


*/


/* PALINDROME PARTITION:

Given a string s, partition s such that every substring of the partition is a palindrome
. Return all possible palindrome partitioning of s.

*/

/* BINARY TREE LEVEL ORDER TRAVERSAL:

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

*/

/* TOP K FREQUENT ELEMENTS:

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

*/

/* BEST TIME TO BUY AND SELL 2:

You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

*/

/* UNIQUE PATHS:

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

*/

/* FLATTEN NESTED LIST ITERATOR:

You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists. Implement an iterator to flatten it.

Implement the NestedIterator class:

NestedIterator(List<NestedInteger> nestedList) Initializes the iterator with the nested list nestedList.
int next() Returns the next integer in the nested list.
boolean hasNext() Returns true if there are still some integers in the nested list and false otherwise.
Your code will be tested with the following pseudocode:

initialize iterator with nestedList
res = []
while iterator.hasNext()
    append iterator.next() to the end of res
return res
If res matches the expected flattened list, then your code will be judged as correct.

 
*/

/* KTH SMALLEST ELEMENT IN A SORTED MATRIX:

Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

You must find a solution with a memory complexity better than O(n2).


*/


/* CONSTRUCT BINARY TREE FROM PRE AND IN ORDER TRAVERSAL:

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

*/

/* ODD EVEN LINKED LIST:

Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

*/

/* POPULATING NEXT RIGHT POINTERS IN EACH NODE:

You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

*/

/* FIND THE DUPLICATE NUMER:

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

 */

/* LOWEST COMMON ANCESTOR OF A BINARY TREE:
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.
 
*/

/* SORT COLORS:

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

*/

/* VALID SODUKU:

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

*/

/* SHUFFLE AN ARRAY:

Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.

Implement the Solution class:

Solution(int[] nums) Initializes the object with the integer array nums.
int[] reset() Resets the array to its original configuration and returns it.
int[] shuffle() Returns a random shuffling of the array.


*/

/* DESIGN TIC TAC TOE:

Assume the following rules are for the tic-tac-toe game on an n x n board between two players:

A move is guaranteed to be valid and is placed on an empty block.
Once a winning condition is reached, no more moves are allowed.
A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.
Implement the TicTacToe class:

TicTacToe(int n) Initializes the object the size of the board n.
int move(int row, int col, int player) Indicates that the player with id player plays at the cell (row, col) of the board. The move is guaranteed to be a valid move, and the two players alternate in making moves. Return
0 if there is no winner after the move,
1 if player 1 is the winner after the move, or
2 if player 2 is the winner after the move.

*/

var TicTacToe = function(n) {
  this.board = new Array(n).fill(new Array(n).fill(0))
  this.size = n;
};

/** 
* @param {number} row 
* @param {number} col 
* @param {number} player
* @return {number}
*/
TicTacToe.prototype.move = function(row, col, player) {
  let currPos = this.board[row][col];
  const isValid = (row, col) => {
      return (row >= 0 && row < this.board.length && col >= 0 && col < this.board[row].length);
  }

  const checkWinner = (row, col, direction, visited = new Set(), count = 0) => {
      // check if its valid
      if (count === this.size) return true; 
      if(!isValid(row, col)) return;
      if(visited.has(row + ',' + col)) {
          return;
      }
      if(this.board[row][col] === player) {
          count++;
      } else {
          return false;
      }
      visited.add(row + ',' + col);

      switch(direction) {
          case 'horizontal': 
              checkWinner(row, col - 1, 'horizontal', visited, count);
              checkWinner(row, col + 1, 'horizontal', visited, count);
              break;
          case 'vertical':
              checkWinner(row - 1, col, 'vertical', visited, count);
              checkWinner(row + 1, col, 'vertical', visited, count);
              break;
          case 'diagonal':
          // down right
              checkWinner(row + 1, col + 1, 'diagonal', visited, count);
          // up left
              checkWinner(row - 1, col - 1, 'diagonal', visited, count);
              break;
          case 'anti-diagonal': 
          // up right
              checkWinner(row - 1, col + 1, 'anti-diagonal', visited, count);
          // down left
              checkWinner(row + 1, col - 1, 'anti-diagonal', visited, count);
              break;

          default:
              checkWinner(row, col - 1, 'horizontal');
              checkWinner(row, col + 1, 'horizontal');
               checkWinner(row - 1, col, 'vertical');
              checkWinner(row + 1, col, 'vertical');
          // down right
              checkWinner(row + 1, col + 1, 'diagonal');
          // up left
             checkWinner(row - 1, col - 1, 'diagonal');
          // up right
              checkWinner(row - 1, col + 1, 'anti-diagonal');
          // down left
              checkWinner(row + 1, col - 1, 'anti-diagonal');
              break;


      }
  }
  
  if(currPos === 0) {
      this.board[row][col] = player;
      // check if its a winning move
      // check if vertical positions are all the player
      // check if horizontal positions are all the player
      // check if diagonal positions are all the player
      if(checkWinner(row, col)) return player;
      else return 0;

  } 

  // return winner
  
};

class TicTacToe {
  constructor(n) {
    this.len = n;

    this.rows = new Array(n).fill(0);
    this.cols = new Array(n).fill(0);
    this.dia = 0;
    this.antiDia = 0;
  }

  move(row, col, player) {
    const i = player === 1 ? 1 : -1;

    this.rows[row] += i;
    this.cols[col] += i;
    if (row === col) this.dia += i;
    if (col === this.len - row - 1) this.antiDia += i;

    if (
      Math.abs(this.rows[row]) === this.len ||
      Math.abs(this.cols[col]) === this.len ||
      Math.abs(this.dia) === this.len ||
      Math.abs(this.antiDia) === this.len
    ) return player;

    return 0;
  }
}

/* MEETING ROOMS:
Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.
*/

/* MEETING ROOMS 2:
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.
*/

var minMeetingRooms = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0]);
  const mergedIntervals = [  intervals[0] ];

  for (let i = 1; i < intervals.length; i++) {
      const lastEl = mergedIntervals[mergedIntervals.length - 1];
      const currEl = intervals[i];

      if (currEl[0] >= lastEl[1]) lastEl[1] = Math.max(lastEl[1], currEl[1]);
      else mergedIntervals.push(currEl);
  };

  return mergedIntervals.length;

};