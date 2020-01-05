class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.front = null;
    this.last = null;
  }
}

module.exports = { Queue };
