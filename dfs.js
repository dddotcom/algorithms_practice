//pseudo class code
class Stack {
  constructor(){
    this.storage = {};
    this.size = 0;
  }

  push(n){
    this.storage[this.size] = n;
    this.size++;
  }

  pop(){
    if(!this.isEmpty()){
      let value = this.storage[this.size-1];
      delete this.storage[this.size];
      this.size--;
      return value;
    }
  }

  peek(){
    if(!this.isEmpty()){
      return this.storage[this.size];
    }
  }

  isEmpty(){
    return this.size === 0;
  }
}

class Node{
  constructor(data){
    this.data = data;
    this.adjNodes = [];
    this.color = "white";
  }

  isUnvisited(){
    return this.color === "white";
  }

  visit(){
    this.color = "gray";
    console.log(this.data);
  }

  completelyVisited(){
    this.color = "black";
  }
}

var s = new Stack();

function dfs(n){
  s.push(n)

  while(!s.isEmpty()){
    let currentNode = s.peek();
    currentNode.visit();

    currentNode.adjNodes.forEach(function(n){
      if(n.isUnvisited()){
          dfs(n);
      }
    });

    currentNode.completelyVisited();
    s.pop();
  }

}
