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
  }

  add() {
    return false;
  }

  contains(value) {
    return false;
  }
  
  preOrder() {
    const preArray = [];
    
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
