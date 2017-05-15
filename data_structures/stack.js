// create a stack class
var Stack = function(){
  this.count = 0;
  this.storage = {};
}

//create stack methods
Stack.prototype.push = function(item){
  this.storage[this.count] = item;
  this.count++;
}

Stack.prototype.pop = function(){
  if(this.count === 0){
    return undefined;
  }
  this.count--; //modifies this.count
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
}

Stack.prototype.peek = function() {
  if(this.count === 0){
    return undefined;
  }
  return this.storage[this.count-1];
}

Stack.prototype.isEmpty = function(){
  return this.count === 0;
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
