/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. 
The remaining elements of nums are not important as well as the size of nums. Return k.
*/

//APPROACH = TWO POINTER
//one pointer to iterate through the array, the other to keep track of the position where the next unique element should be
//if the first el = second el
//increment second pointer till we find a unique element
//set the unique element to the position tracked by the other pointer
//increment both pointers -> unique pointer is at next open spot, iterating pointer is at the next element to iterate over

const removeDuplicates = (array) => {
  let uniqueTracker = 0;
  let iteratingPointer = 0;
  //iterate over the array until iteratingPointer reaches the end
  while (iteratingPointer < array.length) {
    //if the elements are the same, incremenet the iteratingPointer
    if (array[uniqueTracker] === array[iteratingPointer]) {
      iteratingPointer++;
      //if there is a unique vale
    } else {
      //set the next element in the array to the unique element
      array[uniqueTracker + 1] = array[iteratingPointer];
      //incremenet both pointers
      uniqueTracker++;
      iteratingPointer++;
    }
  }
  //return the number of unique elements
  return i + 1;
};

/*
  Receives a variable number of arrays, and returns an array that contains every item shared between all passed-in arrays
*/

//APPROACH: loop through each item in the first array, check if it exists in all other arrays, and push it to the result array if it does.
const findCommonItems = (...arrays) => {
  //store common items
  const result = [];
  //check if no arrays are passed in, if so return the empty array
  if (arrays.length === 0) return result;
  //initialize variable and set it equal to the first array passed in
  const firstArray = arrays[0];
  //iterate over each item in the first array
  for (let i = 0; i < firstArray.length; i++) {
    const currentItem = firstArray[i];
    //check if the result array already contains the current item
    if (result.includes(currentItem)) {
      //if it does, move on to the next element in the array
      continue;
    }
    let itemFound = true;
    //loop through the remaining arrays
    for (let j = 1; j < arrays.length; j++) {
      //check if the currentItem is not included in the current array
      if (!arrays[j].includes(currentItem)) {
        //if that array does not include the current item set itemFound to false and break out of the current loop
        itemFound = false;
        break;
      }
    }
    //if that array does contain the current item
    if (itemFound) {
      //add the current item to the result array
      result.push(currentItem);
    }
  }
  return result;
};
