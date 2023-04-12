/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.
*/

const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    //calculate the width and height of the container
    const width = right - left;
    //area between the two lines will always be limited by the shorter line
    const height = Math.min(height[left], height[right]);
    //calculate the area
    const currentArea = width * height;
    //update the maximum area
    maxArea = Math.mmax(currentArea, maxArea);
    //move the pointers inward
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
