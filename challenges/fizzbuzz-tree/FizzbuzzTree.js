// define a new tree where traversal returns an array of nodes instead of the values therein, then mutate the nodes, and the original BST will be correct without making a new BST

const modifiedPreOrderTraversal = (node, mutateArray = []) => {
  if(node !== null) {
    mutateArray.push(node.value);
    modifiedPreOrderTraversal(node.left, mutateArray);
    modifiedPreOrderTraversal(node.right, mutateArray);
  }
  
  return mutateArray;
};

const FizzbuzzTree = (BST) => modifiedPreOrderTraversal(BST);

module.exports = { FizzbuzzTree };
