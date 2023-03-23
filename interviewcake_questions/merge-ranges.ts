const mergeRanges = (arrayOfArrays: number[][]): number[][] => {
  arrayOfArrays.sort((a,b)=>a[0]-b[0])
  const results: number[][] = [arrayOfArrays[0]]
  arrayOfArrays.forEach((current)=>{
    //last item added to the result array
    const recent = results[results.length-1]
    if(current[0] <= recent[1]){
      recent[1] = Math.max(recent[1], current[1])
    } else {
      results.push(current)
    }
  })
  return results
}