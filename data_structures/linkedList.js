//node class
var Node = class Node {
  constructor(data){
    this.data = data;
    this.next = undefined;
  }
}

//linked list class
var LinkedList = class LinkedList {
  constructor(){
    this.head = undefined;
    this.tail = undefined;
  }

  //adds after tail
  add(data){
    //create new node
    let n = new Node(data);
    //check if list is empty, if it is, head and tail should be set to the new node
    if(this.getLength() === 0){
      this.head = n;
      this.tail = n;
    } else {
      //otherwise, just update the new tail
      let oldTail = this.tail;
      oldTail.next= n;
      //set new tail
      this.tail = n;
    }
  }

  //removes tail, sets new tail
  deleteTail(){
    //empty list
    if(this.getLength() === 0){
      return undefined;
    } else if (this.getLength() === 1){
      this.head = undefined;
      this.tail = undefined;

    } else {
      let n = this.head;
      while(n.next !== this.tail){
        n = n.next;
      }
      this.tail = n;
      n.next = undefined;
    }
  }

  //removes head, sets new head
  deleteHead(){
    //empty list
    if(this.getLength() === 0){
      return undefined
    } else if (this.getLength() === 1){
      this.head = undefined;
      this.tail = undefined;
    } else {
      let n = this.head.next;
      this.head = n;
    }
  }

  //deletes node that can be anywhere in the list
  deleteNode(data){
    if(this.head.data === data){
      this.deleteHead();
    } else if (this.tail.data === data){
      this.deleteTail();
    } else {
      let temp = this.head;
      let n;
      while(temp.next && temp.next.data !== data){
        temp = temp.next;
      }
      n = temp.next;
      if(n){
        temp.next = n.next;
      } else {
        console.log("Didn't find node",data, "in list");
      }
    }
  }

  //extra functions
  print(){
    let str = "";
    if(this.getLength() !== 0) {
      let n = this.head;
      str += n.data + "";
      n = n.next;
      while(n){
        str += " -> " + n.data
        n = n.next;
      }
    }
    return str;
  }

  getLength(){
    if(!this.head && !this.tail){
      return 0;
    } else {
      let count = 1;
      let n = this.head;
      while(n.next){
        count++;
        n = n.next;
      }
      return count;
    }
  }
}

let ll = new LinkedList();
console.log("Length =", ll.getLength());
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);
ll.add(7);
ll.add(8);
ll.add(9);
ll.add(10);
console.log("Initialized: ", ll.print());
console.log("Length =", ll.getLength());
ll.deleteTail();
console.log("After deleteTail:", ll.print());
console.log("Length =", ll.getLength());
ll.deleteHead();
console.log("After deleteHead:", ll.print());
console.log("Length =", ll.getLength());
ll.deleteNode(2);
console.log("After deleteNode(2):", ll.print());
console.log("Length =", ll.getLength());
ll.deleteNode(9);
console.log("After deleteNode(9):", ll.print());
console.log("Length =", ll.getLength());
ll.deleteNode(6);
console.log("After deleteNode(6):", ll.print());
console.log("Length =", ll.getLength());
ll.deleteNode(11);
console.log("After deleteNode(11):", ll.print());
console.log("Length =", ll.getLength());
