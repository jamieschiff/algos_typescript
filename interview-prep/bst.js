/*tree sum */

//dfs
const treeSumDFS = (root) => {
  if (root === null) {
    return null;
  }
  return root.val + treeSumDFS(root.left) + treeSumDFS(root.right);
};

const treeSum2 = (root) => {
  const leftValue = root.left ? treeSum2(root.left) : 0;
  const rightValue = root.right ? treeSum2(root.right) : 0;
  return root.value + leftValue + rightValue;
};
//bfs
const treeSumBFS = (root) => {
  let totalSum = 0;
  let queue = [root];
  if (!root) return 0;
  while (queue.length) {
    const current = queue.shift();
    totalSum += current.val;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return totalSum;
};

/* function should return a 2-Dimensional array where each subarray represents a level of the tree */
// Definition of a binary tree node
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Function to return levels of a binary tree
const treeLevels = (root) => {
  // Step 1: Initialize an empty result array and a queue for level-order traversal
  const result = [];
  const queue = [root];

  // Step 2: Perform level-order traversal
  while (queue.length > 0) {
    const size = queue.length;
    const currentLevel = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift(); // Dequeue the node
      currentLevel.push(node.val); // Add node value to current level array

      if (node.left) {
        queue.push(node.left); // Enqueue the left child
      }

      if (node.right) {
        queue.push(node.right); // Enqueue the right child
      }
    }

    result.push(currentLevel); // Add current level array to result array
  }

  // Step 3: Return the result array of levels
  return result;
};

/* bottom right-most value in a BST */
// Definition of a binary tree node
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Function to find the right-most value in the bottom-most level of a binary tree
const bottomRightValue = (root) => {
  // Step 1: Initialize a queue to perform level-order traversal
  const queue = [root];

  // Step 2: Perform level-order traversal
  let rightMostValue = null;
  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift(); // Dequeue the node

      if (i === size - 1) {
        rightMostValue = node.val; // Update the right-most value
      }

      if (node.left) {
        queue.push(node.left); // Enqueue the left child
      }

      if (node.right) {
        queue.push(node.right); // Enqueue the right child
      }
    }
  }

  // Step 3: Return the right-most value in the bottom-most level
  return rightMostValue;
};

//BUILD BST
const sortedArrayToBST = (nums) => {
  const buildBST = (left, right) => {
    if (left > right) {
      return null; // Empty subarray
    }

    const mid = Math.floor((left + right) / 2); // Choose middle element as root
    const root = new TreeNode(nums[mid]); // Create root node

    root.left = buildBST(left, mid - 1); // Recursively build left subtree
    root.right = buildBST(mid + 1, right); // Recursively build right subtree

    return root;
  };

  return buildBST(0, nums.length - 1); // Start with entire array
};


const isBalanced = (root) => {
  //if tree is empty -> balanced
  if(!root) return true
  //heigh function will return -1 if unbalanced
  const height = getHeight(root)
  return height === -1 ? false : true
}
//returns the height of a current subtree
const getHeight = (root)=>{
//base case
if(root === null) return 0
//height of left subtree
const leftHeight = getHeight(root.left)

//height of right subtree
const rightHeight = getHeight(root.right)

//if left or right is unbalanced return -1
if(leftHeight === -1 || rightHeight === -1) return -1
//if their heights differ by more than 1, return -1
if(Math.abs(leftHeight - rightHeight) > 1) return -1
//otherwise, return the height of this current subtree as max(left, right) + 1 (add a level of depth for self)
return Math.max(leftHeight, rightHeight) + 1
}