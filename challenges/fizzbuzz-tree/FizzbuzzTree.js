// define a new tree where traversal returns an array of nodes instead of the values therein, then mutate the nodes, and the original BST will be correct without making a new BST

const { BinarySearchTree } = require('../tree/Tree');

class UtilityTree extends BinarySearchTree {
  constructor(value = null) {
    super(value);
  }


}

const FizzbuzzTree = (BST) => BST;

module.exports = { FizzbuzzTree };
