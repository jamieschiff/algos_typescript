const maxAreaWaterTank = (height) => {
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
