/*"Given a circular linked list, implement an algorithm which returns the node at the beginning of a loop.
Example: A -> B -> C -> D -> E -> C    (answer is C)" */

//set to store visited nodes
const circularLinkedList = (node) => {
  let current = node;
  const set = new Set();
  // set.add(current)
  while (current) {
    if (set.has(current)) {
      return current.value;
    } else {
      set.add(current);
    }
  }
  return null;
};
//fast and slow pointer
const circularLinkedListFastAndSlow = (node) => {
  if (node === null) return false;
  let slow = node;
  let fast = node.next;
  while (slow !== fast) {
    if (fast == null || fast.next == null) {
      return false;
    }
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  // return true;
};

/* Given a binary tree, check if it is balanced (ie the heights of the two subtrees of any node never differ by more than one. */
const checkBalancedBinaryTree = (root) => {
  if (!root) return true;
  const getHeight = (node) => {
    if (!node) return 0;
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  };
  const checkBalance = (node) => {
    if (!node) return true;
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
    if (Math.abs(leftHeight - rightHeight) > 0) {
      return false;
    }
    return checkBalance(node.left) && checkBalance(node.right);
  };
  return checkBalance(root);
};

//GIVEN A SORTED ARRAY REMOVE DUPLICATES IN PLACE
function remove_duplicates(arr) {
  // index of the next non-duplicate element
  let nextNonDuplicate = 1;
  let i = 0;
  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate += 1;
    }
    i += 1;
  }
  // console.log(arr);
  return nextNonDuplicate;
}

// console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));

//NUM ISLANDS

//DFS:
const numIslandsDFS = (matrix) => {
  const rows = matrix.length;
  const columns = matrix[0].length;
  let totalIslands = 0;
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < columns.length; j++) {
      if (matrix[i][j] === 1) {
        totalIslands++;
        visitIlandsDFS(matrix, i, j);
      }
    }
  }
  return totalIslands;
};

const visitIlandsDFS = (matrix, xPosition, yPosition) => {
  //check if out of bounds
  if (
    xPosition < 0 ||
    yPosition < 0 ||
    xPosition >= matrix.length ||
    yPosition >= matrix[0].length
  ) {
    return;
  }
  //check if its a water cell
  if (maxtrix[xPosition][yPosition] === 0) {
    return;
  }
  //mark the current position as visited - AKA set it to a water cell - AKA set it to 0
  matrix[xPosition][yPosition] = 0;
  //visit the current cells neighbors
  visitIlandsDFS(matrix, xPosition + 1, yPosition);
  visitIlandsDFS(matrix, xPosition - 1, yPosition);
  visitIlandsDFS(matrix, xPosition, yPosition + 1);
  visitIlandsDFS(matrix, xPosition, yPosition - 1);
};

//time complexity = O(M*N) => where M is the number of rows and N is the number of columns => have to traverse the whole graph to find the islands

//BFS:
const numIslandsBFS = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let totalIslands = 0;
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < columns.length; j++) {
      if (matrix[i][j] === 1) {
        totalIslands++;
        visitIlandsBFS(matrix, i, j);
      }
    }
  }
  return totalIslands;
};

const visitIlandsBFS = (matrix, xPosition, yPosition) => {
  const neighbors = [xPosition, yPosition];
  while (neighbors.length) {
    const cell = neighbors.shift();
    const row = cell[0];
    const col = cell[1];

    //check bounds
    if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length) {
      return;
    }
    //check if its a water cell
    if (matrix[row][col] === 0) {
      return;
    }
    //add all neighbors to the queue for BFS
    neighbors.push([row + 1, col]);
    neighbors.push([row - 1, col]);
    neighbors.push([row, col + 1]);
    neighbors.push([row, col - 1]);
  }
};

//BFS with Visited Matrix

const numIslandsBFSwithMatrix = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let totalIslands = 0;
  const visited = new Set();
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < columns.length; j++) {
      //if the cell has not been visited before and is land
      if (matrix[i][j] === 1 && !visited.has(matrix[i][j])) {
        totalIslands++;
        visitIlandsBFSMatrix(matrix, visited, i, j);
      }
    }
  }
  return totalIslands;
};
const visitIlandsBFSMatrix = (matrix, visited, xPosition, yPosition) => {
  const neighbors = [xPosition, yPosition];
  while (neighbors.length) {
    const cell = neighbors.shift();
    const row = cell[0];
    const col = cell[1];
    //check bounds
    if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length) {
      return;
    }
    //check if its a water cell or the cell has been visited
    if (matrix[row][col] === 0 || visited.has(matrix[row][col])) {
      return;
    }
    //add the cell to the visited set
    visited.add(matrix[row][col]);
    //add all neighbors to the queue for BFS
    neighbors.push([row + 1, col]);
    neighbors.push([row - 1, col]);
    neighbors.push([row, col + 1]);
    neighbors.push([row, col - 1]);
  }
};
