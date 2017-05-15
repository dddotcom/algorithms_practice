// create a stack class
var Stack = class Stack {
  constructor(){
    this.count = 0;
    this.storage = {};
  }

  push(item){
    this.storage[this.count] = item;
    this.count++;
  }

  pop(){
    if(this.count === 0){
      return undefined;
    }
    this.count--; //modifies this.count
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  peek(){
    if(this.count === 0){
      return undefined;
    }
    return this.storage[this.count-1];
  }

  isEmpty(){
    return this.count === 0;
  }
}

var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
console.log(s.storage);
console.log(s.peek());
console.log(s.pop());
console.log(s.storage);
console.log(s.isEmpty());
