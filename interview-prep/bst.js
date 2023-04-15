/*tree sum */

//dfs
const treeSumDFS = (root) => {
  if (root === null) {
    return null;
  }
  return root.val + treeSumDFS(root.left) + treeSumDFS(root.right);
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
