const reverseWords = (array: string[]) : string[]=> {
 //reverse the entire array => gives us the right word order but with each word backwards
 reverseCharacters(array, 0, array.length-1)
 
 //reverse each word in the message's characters

 //track the index of the *start* of the current word while looking for the *end* of the current word
 let start:number = 0
 for (let i = 0; i < array.length; i++){
  //loop through array looking for spaces or the end of the array
  if(i===array.length || array[i] === ' '){
    reverseCharacters(array, start, i-1)
    //increment the next words start by one
    start = i + 1
  }
 }
}

const reverseCharacters = (array: string[], left: number, right: number): void=>{
  //approach the middle of the array from both sides
  while(left < right){
    const temp = array[left]
    array[left] = array[right]
    array[right] = temp
    left +=1
    right -=1
  }
}