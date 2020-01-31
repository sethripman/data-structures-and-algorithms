class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
  
class BinarySearchTree {
  constructor(value = null) {
    this.root = value;
    this.returnArray = [];
  }

  add() {
    return false;
  }

  contains(value) {
    return false;
  }
  
  preOrder(node) {
    
    if(node !== null) {
      this.returnArray.push(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
    
    const preArray = [...this.returnArray];
    this.returnArray = [];
    return preArray;
  }
  
  inOrder() {
    const inArray = [];

    return inArray;
  }

  postOrder() {
    const postArray = [];

    return postArray;
  }
  
}
  
module.exports = { Node, BinarySearchTree };
