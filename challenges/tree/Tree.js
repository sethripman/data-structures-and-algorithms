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
  
  inOrder(node) {

    if(node !== null) {
      this.inOrder(node.left);
      this.returnArray.push(node.value);
      this.inOrder(node.right);
    }
    
    const inArray = [...this.returnArray];
    this.returnArray = [];
    return inArray;
  }

  postOrder(node) {

    if(node !== null) {
      this.preOrder(node.left);
      this.preOrder(node.right);
      this.returnArray.push(node.value);
    }
    
    const postArray = [...this.returnArray];
    this.returnArray = [];
    return postArray;
  }
  
}
  
module.exports = { Node, BinarySearchTree };
