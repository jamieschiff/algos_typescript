// https://www.freecodecamp.org/news/8-essential-graph-algorithms-in-javascript/

//EXPLORING INBOUNDS
const isInbound = (grid, row, column) => {
  const rowInbounds = row >= 0 && row < grid.length;
  const columnInbounds = column >= 0 && column < grid[0].length;
  if (!rowInbounds || !columnInbounds) return false;
  else return ture;
};

//closest carrot
const closestCarrot = (grid, startRow, startCol) => {
  const rowNumber = grid.length;
  const colNumber = grid[0].length;
  const queue = [];
  const visited = new Set();
  //helper function to check if position is valid
  const isValidPosition = (row, col) => {
    return row >= 0 && row < rowNumber && col >= 0 && col < colNumber;
  };
  //check if the starting position is valid
  if (
    !isValidPosition(startRow, startCol) ||
    grid[startRow][startCol] === 'X'
  ) {
    //invalid starting position
    return -1;
  }
  //add starting posiotion to the queue and mark it as visited
  queue.push([startRow, startCol]);
  // const pos = `${startRow},${startCol}`
  visited.add(`${startRow},${startCol}`);
  //possible moves = up, down, left, right
  const moves = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  //BFS to find shortest path
  let steps = 0;
  while (queue.length) {
    const numberOfNodesAtCurrentLevel = queue.length;
    for (let i = 0; i < numberOfNodesAtCurrentLevel; i++) {
      const [row, col] = queue.shift();

      //check if current position is a carrot
      if (grid[row][col] === 'C') return steps;
      for (const [rowMove, colMove] of moves) {
        const newRow = row + rowMove;
        const newCol = col + colMove;
        //check to make sure its a valid position, not an X and hasnt been visited
        if (
          isValidPosition(newRow, newCol) &&
          grid[newRow][newCol] !== 'X' &&
          !visited.has(`${newRow},${newCol}`)
        ) {
          queue.push([newRow, newCol]);
          visited.add(`${newRow},${newCol}`);
        }
      }
    }
    //increment steps at each level of BFS
    steps++;
  }
  return -1;
};

//SHORTEST PATH = bfs

//time complexity: O(V + E) => need to visite each vertex and node once
// space: O(V + E) => using additional space to store the adjacency list and the visited set
const shortestPath = (edges, src, dst) => {
  const graph = buildGraph(edges);
  const result = exploreGraph(graph, src, dst, new Set());
  return result > 0 ? result : -1;
};
const buildGraph = (edges) => {
  const obj = {};
  for (let [row, col] of edges) {
    if (!obj[row]) obj[row] = [];
    if (!obj[col]) obj[col] = [];
    obj[row].push(col);
    obj[col].push(row);
  }
  return obj;
};
//add visited set
//increment in each iteration
const exploreGraph = (graph, src, dst, visited) => {
  // if (src === dst) return 1
  //queue :
  const queue = [[src, 0]];
  // let count = 0
  while (queue.length) {
    const [node, distance] = queue.shift();
    //if we have reached the target node, return the distance
    if (node === dst) return distance;
    //otherwise explore the neighbors
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
};

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
];
// console.log(shortestPath(edges, 'w', 'z')) //2

//RECURSIVE DFS APPROACH

const shortestPathDFS = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  //set to track visited nodes
  const set = new Set();
  const dfs = (node, distance) => {
    //base case: if node = nodeB
    if (node === nodeB) return distance;
    //add the current node
    visited.add(node);
    let shortest = -1;
    //explore the current nodes neighbors
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        const result = dfs(neighbor, distance + 1);
        //update shortest distance if a valid path is found
        if (result !== -1 && (shortest === -1 || result < shortest)) {
          shortest = result;
        }
      }
    }
    return shortest;
  };
  return dfs(nodeA, 0);
};

//NUM ISLANDS
//time complexity: O(numRows * numColumns) => iterates through each cell in the grid exactly once, and the time it takes to process each cell is constant
//helper function is also O(numRows * numColumns)
//space complexity: worst case O(numRows * numColumns) => if you visit every set

//LARGEST COMPONENT

//CONNECTED COMPONENTS COUNT

//MIN ISLANDS

//CLOSEST CARROT

//LONGEST PATH

//DFS TO PRINT ALL THE NODES IN A GRAPH
const printNodesIterative = (graph, startNode) => {
  const stack = [startNode];
  const visited = new Set();
  visited.add(startNode);
  while (stack.length) {
    //remove the node
    const node = stack.pop();
    //process the node
    console.log(node);
    //add neighbors
    const neighbors = graph[node];
    for (const neighbor of neighbors) {
      if (visited.has(neighbor)) continue;
      visited.add(neighbor);
      stack.push(neighbor);
    }
  }
};

const printNodesRecursive = (graph, startNode, visited = new Set()) => {
  //base case
  if (visited.has(startNode)) return;
  //process node
  visited.add(startNode);
  console.log(startNode);
  //recurse on neighbors
  const neighbors = graph[startNode];
  for (const neighbor of neighbors) {
    printNodesRecursive(graph, neighbor, visited);
  }
};

const getImportance = (employees, id) => {
  let employeeMap = new Map();
  for (employee of employees) {
    employeeMap.set(employee.id, {
      importance: employee.importance,
      sub: employee.subordinates,
    });
  }

  let totalImportance = 0;
  let queue = [id];

  while (queue.length > 0) {
    let currentEmployee = employeeMap.get(queue.shift());
    totalImportance += currentEmployee.importance;
    queue.push(...currentEmployee.sub);
  }

  return totalImportance;
};

const numIslandsBFS = (grid) => {
  const isIsland = (i, j) =>
    i >= 0 &&
    i < grid.length &&
    j >= 0 &&
    j < grid[i].length &&
    grid[i][j] === '1';

  const bfs = (i, j) => {
    const queue = [[i, j]];

    while (queue.length) {
      const [i, j] = queue.shift();

      grid[i][j] = '0';

      if (isIsland(i + 1, j)) queue.push([i + 1, j]);
      if (isIsland(i, j + 1)) queue.push([i, j + 1]);
      if (isIsland(i - 1, j)) queue.push([i - 1, j]);
      if (isIsland(i, j - 1)) queue.push([i, j - 1]);
    }
  };

  let counter = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === '1') {
        counter += 1;
        bfs(i, j);
      }
    }
  }

  return counter;
};

const inbounds = (grid, r, c) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;
  return true;
};

const minimumIsland = (grid) => {
  const visited = new Set();

  let minSize = Infinity;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      const size = exploreSize(grid, r, c, visited);
      if (size > 0 && size < minSize) {
        minSize = size;
      }
    }
  }

  return minSize;
};

const exploreSize = (grid, r, c, visited) => {
  // const rowInbounds = 0 <= r && r < grid.length;
  // const colInbounds = 0 <= c && c < grid[0].length;
  // if (!rowInbounds || !colInbounds) return 0;
  if(!inbounds(grid, r, c)) return 0

  if (grid[r][c] === 'W') return 0;

  const pos = r + ',' + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;
  size += exploreSize(grid, r - 1, c, visited);
  size += exploreSize(grid, r + 1, c, visited);
  size += exploreSize(grid, r, c - 1, visited);
  size += exploreSize(grid, r, c + 1, visited);
  return size;
};

const buildGraphDirected = (numCoures, prereqs) =>{
  const graph = {}
  for (let i = 0; i < numCourses; i++){
    graph[i] = []
  }
  for (let prereq of prereqs){
    const [a,b]=prereq
    graph[a].push(b)
  }
  return graph
}


