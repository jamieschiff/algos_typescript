/* 
Declare a recursive function 'findIndex', which takes in at least two arguments (an array and a value).
'findIndex' should search the array for the passed-in value. If found, it should return the first index number at which the value appears. If not, it should return -1.

Example: findIndex([1, 2, 3, 4, 5, 3], 3) --> 2

*/
const findIndex = (array, value, index = 0) => {
  if (array[index] === value) return index;
  else if (index >= array.length) return -1;
  return findIndex(array, value, index + 1);
};

console.log(findIndex([1, 2, 3, 4, 5, 3], 3)); //2
/* 
Declare a recursive  function 'backwardsAndForwards' that accepts one string as an argument and returns true if that string is a palindrome (i.e. the same backwards and forwards). If the string isn't a palindrome, it will return false. This should be inclusive of spaces and punctuation - e.g. the string 'racecar' would be considered a palindrome, but 'race car' would not.
*/

const backwardsAndForwards = (string) => {
  let start = 0;
  let end = string.length - 1;
  while (start <= end) {
    if (string[start] !== string[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
};
const test1 = 'racecar';
const test2 = 'race car';
console.log(backwardsAndForwards(test1));
console.log(backwardsAndForwards(test2));

/* LEVEL 5 BANK */

/*
Declare a function 'subsetSum' that is given an array of integers and a target number. It should return true if there is a subset of the array that sums up to the target and returns false otherwise. A subset can be any size and the elements do not have to appear consecutively in the array.
Examples:
subsetSum([3, 7, 4, 2], 5)           -> true (3 + 2 = 5)
subsetSum([3, 34, 4, 12, 5, 12], 32) -> true (3 + 12 + 5 + 12 = 32)
subsetSum([8, 2, 4, 12], 13)         -> false
subsetSum([8, -2, 1, -3], 6)         -> true (8 + 1 + (-3) = 6)
*/

const subsetSum = (array, target) => {
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const comp = target - current;
    if (map.has(comp)) return true;
    else map.set(current);
  }
  return false;
};

// console.log(subsetSum([3, 7, 4, 2], 5) )
// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32))

/*
Declare a function 'deepCopy' that creates a deep copy of every level of a given object or array, and returns it, no matter deep the object is nested.
Example:
const tools = [{ editor: { favorite: { mine: { name: 'vscode' } } } }, { shell: 'zsh' }];
const copyOfTools = deepCopy(tools);
console.log(copyOfTools === tools);                                        // -> false
console.log(copyOfTools[0] === tools[0]);                                  // -> false
console.log(copyOfTools[0].editor === tools[0].editor);                    // -> false
console.log(copyOfTools[0].editor.favorite === tools[0].editor.favorite);           // -> false
console.log(copyOfTools[0].editor.favorite.mine === tools[0].editor.favorite.mine);      // -> false
console.log(copyOfTools[0].editor.favorite.mine.name === tools[0].editor.favorite.mine.name); // -> true
*/

/*
Declare a function 'permutations' that produces all possible permutations of a string and outputs them as an array.
Example:
console.log(permutations('aabc')); -> [ 'aabc', 'aacb', 'abac', 'abca', 'acab', 'acba', 'baac', 'baca', 'bcaa', 'caab', 'caba', 'cbaa' ]
*/

const permutations = (string) => {
  const result = [];
  if (string.length === 1) {
    result.push(string);
    return result;
  }
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const remaining = string.slice(0, i) + string.slice(i + 1);
    const subPermutations = permutations(remaining);
    subPermutations.forEach((perm) => {
      result.push(char + perm);
    });
  }
  // generate(string);
  return result;
};
console.log(permutations('aabc'));
/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.
  https://en.wikipedia.org/wiki/Pascal%27s_triangle
  e.g.
  pascalTriangle(1):
  [[1]]
  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]
  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]
  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

/*  DATA STRUCTURES CHALLENGES  */

/* 
A linked list is a collection of sequentially stored objects (called nodes). Each node must contain two properties: an associated value, and a reference to the next node in the list.
Unlike in an array, nodes in a linked list are not accessible directly via index. The only way to traverse the list is to iterate over each node, starting from the first (called the 'head'), using its 'next' property to access the one that follows.
The last node in the list (called the 'tail') should have a 'next' property that is set to 'null', indicating that nothing follows it.

***************      ***************      ***************       
** value: 1 ***      ** value: 2 ***      ** value: 3 ***
** next: --------->  ** next: --------->  ** next: --------->  NULL
***************      ***************      ***************      

Following these specifications, declare a constructor function 'ListNode' for a node in a linked list. It should take one argument, which will be assigned to that node's value.

Next, declare a variable called 'linkedList', and assign it to a new ListNode instance with the value of your choosing.

*/

function ListNode(val) {
  this.value = val;
  this.next = null;
}

const linkedList = new ListNode(0);
console.log(linkedList); // --> { value: 0, next: null }

/* 
Declare a method 'addToEnd', accessible to all instances of the ListNode object, that adds another node to the end of the list.
'addToEnd' should take in one argument, representing the new node's value. It should cycle through however many nodes are currently in the list and add a new ListNode instance to the very end of the list.
*/

ListNode.prototype.addToEnd = function (val) {
  const node = new ListNode(val);
  let pointer = this;
  while (pointer.next) {
    pointer = pointer.next;
  }
  pointer.next = node;
};

/* 
Test that your 'addToEnd' method works by invoking it a few times on the 'linkedList' object you declared previously! 
*/

linkedList.addToEnd(1);
linkedList.addToEnd(2);
linkedList.addToEnd(3);
console.log(linkedList); // --> { value: 0, next: { value: 1, next: { value: 2, next: { value: 3, next: null} } } }

/* 
Declare a method 'addToIndex', accessible to all instances of the ListNode object. 'addToIndex' should add a new value to a specified location in the linked list, using a 0-based indexing system. It should take two arguments: the new node's value, and a number of 1 or greater which represents the index to add it to.
'addToIndex' may not modify the head of the linked list, but should be able to add a node at any other location.
If adding a node anywhere in the middle of the list, all preceding and following nodes must remain in the same order.
If the passed-in index number is greater than the length of the list, simply add the node to the end.

For example:
linkedList.addToIndex('a', 1) // should add a node with the value 'a' to the SECOND place in the list (index 1)
linkedList.addToIndex('b', 3) // should add a node with the value 'a' to the FOURTH place in the list (index 3)
linkedList.addToIndex('z', 0) // should do nothing
linkedList.addToIndex('z', Infinity) // should add a node with the value 'z' to the LAST place in the list, whatever index that is
*/

ListNode.prototype.addToIndex = function (val, i) {
  if (i <= 0) return;
  const node = new ListNode(val);
  let count = 0;
  let pointer = this;
  while (count < i - 1 && pointer.next) {
    pointer = pointer.next;
    count++;
  }
  node.next = pointer.next;
  pointer.next = node;
};

/* 
Test that your 'addToIndex' method works by invoking it a few times on the 'linkedList' object you declared previously! 
*/

const list = new ListNode(0);
list.addToIndex(3.5, 4);
list.addToIndex(2.5, 3);
console.log(list);
list.addToIndex(7, 7);
console.log(list);

/* 
A Binary Search Tree is a data structure which comprises a collection of connected objects (called nodes). The nodes are ordered in a very particular sequence that is designed to optimize searching for a specific value.
Each node in a Binary Search Tree has three properties: one containing that node's value, one that references the node its RIGHT, and one that references the node to its LEFT. The first node in the tree is called the "root". Any nodes with a lower value than the root are stored left of it, and nodes with a higher value than the root are stored right of it. This pattern repeats itself down the tree.

Example for visualization (in which the root node has a value of 5):

          5
        /    \
      3       8
    /   \    /  \
   1     4  6    11

Declare a constructor function, 'BinarySearchTree', that will create nodes in a Binary Search Tree. It should take in one argument, which will be assigned to that node's value. Nodes should also contain a 'right' and 'left' property, which will reference the next nodes in the tree on either side (i.e., the node's "descendants"). If on either side the node does NOT have any descendants, these properties should default to null.

Test your constructor by declaring a new variable, 'tree', and assigning it to a new BinarySearchTree instance with a numerical value of your choosing.
*/

function BinarySearchTree(val) {
  this.value = val;
  this.right = null;
  this.left = null;
}

const tree = new BinarySearchTree(5);
console.log(tree);

/* 
Declare an 'add' method that is available to all BinarySearchTree instances. This method will take in one argument, representing the value of a new node. It should create a new BinarySearchTree node and add it to the existing tree, following the specifications outlined above. In order to do this, 'add' will need to search through the tree to find the correct place at which to store the new node.

For example, if we are adding a node with the value 7 to the diagram example above, we will end up with the following:

          5
        /    \
      3       8
    /   \    /  \
   1     4  6    11
             \
              7

Note that the new node will always be added to the END of one of the tree's branches.

Test your 'add' method by using it to add new nodes to the 'tree' variable you declared above.
*/

BinarySearchTree.prototype.add = function (val) {
  if (val < this.value) {
    if (this.left) return this.left.add(val);
    this.left = new BinarySearchTree(val);
  }
  if (val > this.value) {
    if (this.right) return this.right.add(val);
    this.right = new BinarySearchTree(val);
  }
};

tree.add(4);
tree.add(7);
console.log(tree);
tree.add(6);
tree.add(1);
tree.add(3);
console.log(tree);

/* 
Declare a method, 'contains' that is accessible to all BinarySearchTree instances. This method will take in one argument, representing a value to search for. It will search through the BinarySearchTree to check whether it contains that value, returning true if so and false if not.

Again, test your 'contains' method by calling it on your previously declared 'tree' variable.
*/

BinarySearchTree.prototype.contains = function (val) {
  if (val === this.value) return true;
  if (val < this.value) {
    if (!this.left) return false;
    return this.left.contains(val);
  }
  if (val > this.value) {
    if (!this.right) return false;
    return this.right.contains(val);
  }
};

console.log(tree.contains(8)); // --> false
console.log(tree.contains(5)); // --> true
console.log(tree.contains(1)); // --> true
console.log(tree.contains(7)); // --> true
console.log(tree.contains(3)); // --> true

/*  ASYNC CHALLENGES  */

/* 
 Declare a function 'throttle' that takes in a callback function (without parameters) and a time interval (in ms), and returns a function that *throttles* the callback - i.e, only allows it to run once per the specified time interval.
 For example, if 100 is passed in as the second argument, the callback will only be able to run every 100ms.
 When invoked, the returned function should run the callback, but only if enough time has passed since it was last called.
 The second call to the throttled function within that time interval should queue the callback to run immediately after the interval ends.
 Subsequent calls within the time interval should not be queued. In other words, if the throttled function is invoked multiple times before it's ready to run again, only the first will count.

const funcToRun = () => console.log('running function');
const throttledFunc = throttle(funcToRun, 500);
throttledFunc(); // first call should run immediately
throttledFunc(); // should run after 500ms
throttledFunc(); // should not run, as we already have another call pending
setTimeout(throttledFunc, 500) // should run
*/

const throttle = (callback, time) => {
  // flag to keep track of whether callback is ready to run
  let ready = true;
  // flag to keep track of whether any invocations are pending
  let waiting = false;

  const runCallback = () => {
    ready = false; // callback can no longer be invoked for a set period of time
    waiting = false; // now false because it hasn't been invoked

    // ensure that after a set time interval, the callback will run if it's been invoked.
    // If it hasn't, then set 'ready' to be true for the next time it is.
    setTimeout(() => {
      if (waiting) runCallback();
      else ready = true;
    }, time);

    // callback invoked!
    callback();
  };
  // This is our main function. If 'ready' is true, the callback runs.
  // Otherwise, set 'waiting' to true.
  return () => {
    if (ready) runCallback();
    else waiting = true;
  };
};

/*
Declare a function called 'debounce' that accepts a function and returns a new function that only allows invocation of the given function after 'wait' milliseconds have passed since the last time the returned function ran. Additional calls to the returned function within the 'wait' time should not be invoked or queued, but the timer should still get reset.
Example:
function giveHi() { return 'hi'; }
const giveHiSometimes = debounce(giveHi, 3000);
console.log(giveHiSometimes()); // -> 'hi'
setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'
*/

const debounce = (callback, interval) => {
  let timerStart = new Date();
  return () => {
    const invocationTime = new Date();
    if (invocationTime - timerStart > interval) {
      timerStart = new Date();
      return callback();
    } else {
      timerStart = invocationTime;
      return undefined;
    }
  };
};
