const binarySearch = (target: number, nums: number[]) : boolean => {
  let floorIndex : number = -1
  let ceilingIndex: number = nums.length
  while(floorIndex + 1 < ceilingIndex){
    const distance : number = ceilingIndex - floorIndex
    const halfDistance : number = Math.floor(distance/2)
    const guessIndex : number = floorIndex + halfDistance
    const guessValue : number = nums[guessIndex]
    if(guessValue === target){
      return true
    }
    if (guessValue> target){
      ceilingIndex = guessIndex
    }
    if (guessValue < target){
      floorIndex = guessIndex
    }
  }
  return false
}