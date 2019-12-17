class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value, this.top);
    this.top = node;
  }

  pop() {
    if(!this.top) return null;

    const top = this.top;
    this.top = top.next;
    return top;
  }

  peek() {
    if(!this.top) return null;
    return this.top.value;
  }

  isEmpty() {
    return !this.top;
  }
}
  
class PseudoQueue {
  constructor() {
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }
  
  enqueue(value) {
    this.firstStack.push(value);
  }

  dequeue() {
    while(this.firstStack.top !== null) {
      this.secondStack.push(this.firstStack.pop.value);
    }
    const temp = this.secondStack.peek();
    this.secondStack.pop();
    while(this.secondStack.top !== null) {
      this.firstStack.push(this.secondStack.pop.value);
    }
    return temp;
  }
}
  
module.exports = { PseudoQueue };
