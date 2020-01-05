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

  enqueue(value){
    const node = new Node(value);
    if(!this.front) this.front = node;
    else this.last.next = node;
    this.last = node;
  }

  dequeue(preference){
    if(!preference){
      const popped = this.front.value;
      this.front = this.front.next;
      return popped;
    } else {
      let current = this.front;
      while(current.next.value !== preference){
        current = current.next;
        if(!current.next) return 'Animal not available';
      }
      const found = current.next.value;
      current.next = found.next;
      return found;
    }
  }
}

module.exports = { Queue };
