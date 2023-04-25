//ITERATING OVER OBJECT

const option1 = () => {
  let hashmap = {};
  let result = [];
  //do logic to fill hashmap
  for (let key in hashmap) {
    result.push(hashmap[key]);
  }
};

const option2 = () => {
  let hashmap = {};
  let result = [];
  //do logic to fill hashmap
  Object.keys(hashmap).forEach((key) => {
    result.push(hashmap[key]);
  });
};

//MAP: forEach(value, key) ---- OBJECT: forEach(key, value)
