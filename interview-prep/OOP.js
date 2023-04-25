class NestedIterator {
  constructor(nestedList) {
    this.stack = [];
    this.flatten(nestedList);
  }

  next() {
    if (!this.hasNext()) {
      return null;
    }
    return this.stack.pop();
  }

  hasNext() {
    while (this.stack.length > 0) {
      const top = this.stack[this.stack.length - 1];
      if (typeof top === 'number') {
        return true;
      } else {
        this.flatten(this.stack.pop());
      }
    }
    return false;
  }

  flatten(nestedList) {
    for (let i = nestedList.length - 1; i >= 0; i--) {
      this.stack.push(nestedList[i]);
    }
  }
}

const nestedList = [1, [2, [3, 4]], 5];
const iterator = new NestedIterator(nestedList);
const res = [];
while (iterator.hasNext()) {
  res.push(iterator.next());
}
console.log(res); // Output: [1, 2, 3, 4, 5]
