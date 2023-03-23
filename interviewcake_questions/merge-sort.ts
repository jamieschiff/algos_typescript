//approach: divide the array in half & sort the two halves, then merge the two sorted halves into one sorted whole

const mergeSort = (array: number[]) : number[] =>{
  //base case: arrays with fewer than 2 elements are sorted
  if (array.length < 2){
    return array
  }
  //step 1: divide the array in half -> round down to avoid getting a half index
  const middleIndex : number = Math.floor(array.length/2)
  const leftHalf : number[] = array.slice(0, middleIndex)
  const rightHalf: number[] = array.slice(middleIndex)

  //step 2: sort each half
  const sortedLeft : number[] = mergeSort(leftHalf)
  const sortedRight : number[] = mergeSort(rightHalf)

  //step 3: merge the sorted halves
  const sortedArray : number[] = []
  let currentLeftIndex : number = 0
  let currentRightIndex : number = 0
  while(sortedLeft.length < leftHalf.length + rightHalf.length){
    //sortedLeft arrays first element comes next if its less than sortedRight's first element or if sortedRight is empty
    if (currentLeftIndex < leftHalf.length && (currentRightIndex === rightHalf.length || sortedLeft[currentLeftIndex] < sortedRight[currentRightIndex]) ){
      sortedArray.push(sortedLeft[currentLeftIndex])
      currentLeftIndex++
    } else {
      sortedArray.push(sortedRight[currentRightIndex])
      currentRightIndex++
    }
  }
  return sortedArray
}