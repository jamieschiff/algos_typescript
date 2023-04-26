//https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions

/* ARRAY */

const twoSum = (nums, target) => {
  const map = new Map();
  let pointer = 0;
  // let slowPointer = 0
  while (pointer < nums.length) {
    const current = nums[pointer];
    const compliment = target - current;
    if (map.has(compliment)) {
      return [map.get(compliment), pointer];
    } else {
      map.set(current, pointer);
      pointer++;
    }
  }
  return [-1, -1];
};

// const test1 = [2, 7, 11, 15];
// console.log(twoSum(test1, 9)); //[0,1]
// const test2 = [3, 3];
// console.log(twoSum(test2, 6)); //[0,1]

const addTwoNumbers = (l1, l2) => {
  //create a new list node
  let List = new Node(0);
  //set the head of the list to the new node
  let head = List;
  //variable to track the sum
  let sum = 0;
  //variable to track how much we have to carry for sums > 10
  let carry = 0;
  while (l1 !== null && l2 !== null && carry) {
    if (l1 !== null) {
      sum = sum + l1.value;
      l1 = l1 ? l1.next : null;
    }
    if (l2 !== null) {
      sum = sum + l2.value;
      l2 = l2 ? l2.next : null;
    }
    //if the sum is greater than 10 we have to carrry a value
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }
    head.next = new Node(sum);
    head = head.next;
    //reset sum for next iteration to include the carry value
    sum = carry;
    // reset carry to 0
    carry = 0;
  }
  return List.next;
};

const addTwoNumbers2 = (l1, l2) => {
  const head = new ListNode();
  let cursor = head;
  let carry = 0;
  while (l1 || l2 || carry) {
    cursor.next = new ListNode();
    cursor = cursor.next;
    let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = val >= 10 ? 1 : 0;
    cursor.val = val % 10;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return head.next;
};

const maxProfit = (prices) => {
  let maxProfit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    minPrice = Math.min(minPrice, currentPrice);
    maxProfit = Math.max(maxProfit, currentPrice - minPrice);
  }
  return maxProfit;
};

const maxProfit2 = (prices) => {
  let minPrice = 0;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];
    const tomorrowPrice = prices[i + 1];
    const buyTodaySellTomorrow = tomorrowPrice - currentPrice;
    if (currentPrice < tomorrowPrice) {
      profit = profit + buyTodaySellTomorrow;
    }
  }
  return profit;
};

const containsDuplicate = (array) => {
  const set = new Set();
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (set.has(current)) {
      return true;
    } else {
      set.add(current);
    }
  }
  return false;
};

const containsNearbyDuplicate = (nums, k) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (i - map.get(current) <= k) {
      return true;
    }
    map.set(current, i);
  }
  return false;
};

const productExceptSelf = (nums) => {};

const maximumSubarray = (nums) => {};
const maximumProductSubarray = (nums) => {};
const findMinRotatedSortedArray = (nums) => {};
const searchInRotatedSortedArray = (nums) => {};
const threeSum = (nums, target) => {};
const threeSumClosest = (nums, target) => {};
const containerMostWater = (nums) => {};

/* BINARY */

/* DYNAMIC PROGRAMMING */

/* GRAPH */

/* INTERVAL */

/* LINKED LIST */
const lengthOfLongestSubstring = (s) => {};

const longestPalindromeSubstring = (s) => {};

/* MATRIX */

/* STRING */

/* TREE */

/* HEAP */

/* MIX */

const subsets = (nums) => {
  let finalOuput = [];
  const current = [];
  const generate = (index) => {
    if (nums.length === index) {
      finalOuput.push(current.slice);
      return;
    }
    current.push(nums[index]);
    generage(index + 1);
    current.pop();
    generage(index + 1);
  };
  generate(0);
  return finalOutput;
};

// console.log();
