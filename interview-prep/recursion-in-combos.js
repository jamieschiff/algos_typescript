//ALL SUBSETS: given an array of distinct integers, return all possible subsets

const allSubsets = (array) => {
  //outer array to store the subsets
  const result = [];
  //array to store the current subsets
  const current = [];

  const generate = (index) => {
    //base case: if index is equal to the length of the array -> we have reached the end of the array and add a copy of the current array to the result array
    //return from the function to backtrack and explore other opportunities
    if (index === array.length) return result.push(current.slice());
    //take it: push the element at array[index] to the current subset
    current.push(array[index]);
    //recrusively call generate with the next index to explore subsets with the current elemment
    generate(index + 1);
    //leave it: backtrack by popping the last element from the current subset to simulate leaving it out
    current.pop();
    //recurisvely call generate with the next index to explore subsets without the current index
    generate(index + 1);
  };
  //initial invokate of generate with index set to 0 to start generating subsets from the beginning of the array
  generate(0);
  //return the result containing all subsets
  return result;
};

const array = [1, 7, 4]; //[[1,7,4], [1,7], [1,4], [1], [7,4], [7], [4], []]
console.log(allSubsets(array));


//HT PERMUTATIONS: let's say 