//create queue class
var Queue = function(){
  this.storage = {};
  this.count = 0;
  this.lowestCount = 0;
}

//create queue methods
Queue.prototype.enqueue = function(item){
  this.storage[this.count] = item;
  this.count++;
}

Queue.prototype.dequeue = function(){
  if(this.count - this.lowestCount === 0){
    return undefined;
  }
  var result = this.storage[this.lowestCount];
  delete this.storage[this.lowestCount];
  this.lowestCount++;
  return result;
}

Queue.prototype.peek = function(){
  if(this.count - this.lowestCount === 0){
    return undefined
  }
  return this.storage[this.lowestCount];
}

Queue.prototype.isEmpty = function(){
  return (this.count - this.lowestCount === 0);
}

var q = new Queue();

console.log(q.isEmpty());

q.enqueue("p1");
q.enqueue("p2");
q.enqueue("p3");
console.log(q.storage);
q.enqueue("p4");
console.log(q.storage);
console.log(q.dequeue());
console.log(q.storage);

console.log(q.peek());
console.log(q.isEmpty());
