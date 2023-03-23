const uncompress = (s: string) => {
  let result : string[] = []
  const numbers : string = '1234567890'
  let firstPointer : number = 0
  let secondPointer : number = 0

  while (s.length){
    const character: string = s[firstPointer]
    console.log('THIS IS THE CURRENT CHARACTER: ', character)
    if (numbers.includes(s[firstPointer])){
      firstPointer += 1
    } else {
      const value : number = Number(s.slice(secondPointer, firstPointer))
      for (let i = 0; i < value; i++){
        result.push(character)
      }
      firstPointer += 1
      secondPointer = firstPointer
    }
  }
  return result.join('')
}

const input1: string = "2c3a1t"
// const input2: string = "4s2b"
// const input3: string = "3n12e2z"
console.log(uncompress(input1))


module.exports = uncompress