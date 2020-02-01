// define a new tree where traversal returns an array of nodes instead of the values therein, then mutate the nodes, and the original BST will be correct without making a new BST

const modifiedPreOrderTraversal = (node, mutateArray = []) => {
  if(node !== null) {
    mutateArray.push(node);
    modifiedPreOrderTraversal(node.left, mutateArray);
    modifiedPreOrderTraversal(node.right, mutateArray);
  }

  // now map over the array node.value, applying the rules of fizzbuzz
  
  return mutateArray;
};

const FizzbuzzTree = (BST) => modifiedPreOrderTraversal(BST.root);

module.exports = { FizzbuzzTree };

// Reach out to Kevin Grayson with Vacasa on Linkedin for coffee on automation, tech debt, property management, and the intersection of QA engineering management and design
