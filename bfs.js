//pseudo class code
class Queue {
  constructor(){
    this.storage = {};
    this.size = 0;
    this.first = 0;
  }

  isEmpty(){
    return this.size === this.first;
  }

  enqueue(n){
    this.storage[this.size] = n;
    this.size++;
  }

  dequeue(){
    if(!this.isEmpty()){
      let n = this.storage[this.first];
      this.first++;
      return n;
    }
  }
}

class Node {
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

function bfs(rootNode){
  //enqueue root node
  let q = new Queue();
  q.enqueue(rootNode);

  while(!q.isEmpty()){
    let currentNode = q.dequeue();
    currentNode.visit();

    currentNode.adjNodes.forEach(function(n){
      //visit place each node onto the queue that we haven't seen vbefore
      if(n.isUnvisited()){
          q.enqueue(n);
      }
    });

    //we've visited all the children so mark current node as completely visited
    currentNode.completelyVisited();
  }
}
