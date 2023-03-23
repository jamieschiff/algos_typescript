const reverseLetter = (array: number[]): number[] => {
 //swap characters at opposite end of the array, repeating until we reach the middle of the array
 let start: number = 0
 let end : number= array.length-1
 while(start<end){
  const temp = array[start]
  array[start] = array[end]
  array[end] = temp
  //move the two pointers towars eachother
  start+= 1
  end -=1
 }
 return array
}