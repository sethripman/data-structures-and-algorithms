class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
  
class BinarySearchTree {
  constructor(value = null) {
    if(value === null) this.root = value;
    else this.root = new Node(value);
    this.returnArray = [];
  }

  addHelper(node, newNode) {
    if(newNode.value < node.value) 
    { 
      if(node.left === null) 
        node.left = newNode; 
      else
        this.addHelper(node.left, newNode);  
    } 
  
    else
    { 
      if(node.right === null) 
        node.right = newNode; 
      else
        this.addHelper(node.right, newNode); 
    } 
  }

  add(value) {
    const newNode = new Node(value);
    if(this.root === null) {
      this.root = newNode;
      return newNode;
    } else this.addHelper(this.root, newNode);

    return newNode;
  } 

  contains(node, value) {

    if(node === null) 
      return false; 
  
    else if(value < node.value) 
      return this.search(node.left, value); 
  
    else if(value > node.value) 
      return this.search(node.right, value); 

    else return (value === node.value);
  }

  cleanReturnArray() { this.returnArray = []; }
  
  preOrder(node) {
    
    if(node !== null) {
      this.returnArray.push(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
    
    return this.returnArray;
  }
  
  inOrder(node) {

    if(node !== null) {
      this.inOrder(node.left);
      this.returnArray.push(node.value);
      this.inOrder(node.right);
    }
    
    return this.returnArray;
  }

  postOrder(node) {

    if(node !== null) {
      this.preOrder(node.left);
      this.preOrder(node.right);
      this.returnArray.push(node.value);
    }
    
    return this.returnArray;
  }
  
}
  
module.exports = { Node, BinarySearchTree };
