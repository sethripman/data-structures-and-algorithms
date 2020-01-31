class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
  
class BinaryTree {
  constructor() {
    this.head = null;
  }
  
  preOrder() {
    const node = new Node(val, this.head);
    this.head = node;
  }
  
  inOrder() {
    if(!this.head) return '';
  
    const nodes = [];
    let node = this.head;
    while(node) {
      nodes.push(node.value);
      node = node.next;
    }
  
    return nodes.join(' -> ');
  }

  postOrder() {
    let searchNode = this.head;
    while(searchNode) {
      if(val === searchNode.value) return true;
      searchNode = searchNode.next;
    }
  
    return false;
  }
  
}
  
module.exports = { Node, BinaryTree };
