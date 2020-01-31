const { mapReverse } = require('../arrayReverse/array-reverse');

class Node { // from demo code
  constructor(val, next = null) {
    this.value = val;
    this.next = next;
  }
}
  
class LinkedList {
  constructor() {
    this.head = null;
  }
  
  insert(val) {
    const node = new Node(val, this.head);
    this.head = node;
  }
  
  includes(val) {
    let searchNode = this.head;
    while(searchNode) {
      if(val === searchNode.value) return true;
      searchNode = searchNode.next;
    }
  
    return false;
  }
  
  toString() {
    if(!this.head) return '';
  
    const nodes = [];
    let node = this.head;
    while(node) {
      nodes.push(node.value);
      node = node.next;
    }
  
    return nodes.join(' -> ');
  }

  append(value){
    const node = new Node(value);
    let current = this.head;
    while(current.next !== null){
      current = current.next;
    }
    current.next = node;
  }

  insertBefore(value, newValue) {
    let currentNode = this.head;
    const newNode = new Node(newValue);
    while(currentNode.next.value !== value){
      currentNode = currentNode.next;
    }
    
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  insertAfter(value, newValue){
    const newNode = new Node(newValue);
    let currentNode = this.head;
    while(currentNode.value !== value){
      currentNode = currentNode.next;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  kthFromEnd(k){
    const arrayFromList = [];
    let current = this.head;

    if(Math.sign(k) === -1 || !current) return 'Exception';

    while(current) {
      arrayFromList.push(current.value);
      current = current.next;
    }

    if(k > arrayFromList.length) return 'Exception';
    return mapReverse(arrayFromList)[k];
  }
}
  
module.exports = { Node, LinkedList };
