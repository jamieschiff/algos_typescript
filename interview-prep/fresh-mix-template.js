//https://www.techinterviewhandbook.org/best-practice-questions/
//https://medium.datadriveninvestor.com/curated-list-the-top-most-frequently-asked-coding-questions-you-should-practice-3f8b5ec42ca0
//https://mlengineer.io/common-leetcode-questions-by-categories-532b301130b
//https://leetcode.com/problemset/all/?page=1&listId=wpwgkgt&sorting=W3sic29ydE9yZGVyIjoiREVTQ0VORElORyIsIm9yZGVyQnkiOiJBQ19SQVRFIn1d
//https://github.com/andavid/leetcode-java/blob/master/top-interview-questions-medium.md
//https://medium.com/@koheiarai94/60-leetcode-questions-to-prepare-for-coding-interview-8abbb6af589e

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
//declare a map to store the differnces
// sort the array
//iterate over the array
const threeSum = (array, target) => {
  array.sort((a, b) => a - b);
};

/* TWO SUM CLOSEST */

/* THREE SUM CLOSEST */

/* CONTAINS DUPLICATES */

/* BEST TIME TO BUY AND SELL STOCK */

/* VALID ANAGRAM */

/* VALID PARENTHESES */

/* MAXIMUM SUBARRAY */

/* MAXIMUM NONREPEATING CHARACTERS */

/* MERGE INTERVALS */

/* GROUP ANAGRAMS:

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

*/

/* PRODUCT OF ARRAY EXCEPT SELF */

/* Set Matrix Zeroes:
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

*/

/* Longest Palindromic Substring */

/* Increasing Triplet Sequence */

/* Generate Parentheses */

/* Permutations */

/* Subsets */

/* Word Search */

/* Sort Colors */

/* Num Islands:
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
*/

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
