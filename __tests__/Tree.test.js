const { BinarySearchTree } = require('../challenges/tree/Tree');

describe('binary search tree recursive implementation', () => {
  it('should have a constructor function that creates a BST with a null root if no arguments are passed', () => {
    const testTree = new BinarySearchTree();
    expect(testTree.root).toEqual(null);
  });

  it('should have a constructor function that creates a BST with a root node if a value is passed', () => {
    const testTree = new BinarySearchTree(1);
    expect(testTree.root.value).toEqual(1);
  });

  it('can add a left and right child to a single root node', () => {
    const testTree = new BinarySearchTree();
    testTree.add(1);
    testTree.add(2);
    testTree.add(3);
    testTree.add(0.5);
    expect(testTree.root.value).toEqual(1);
    expect(testTree.root.left.value).toEqual(0.5);
    expect(testTree.root.right.value).toEqual(2);
    expect(testTree.root.right.right.value).toEqual(3);
  });

  it('can successfully return a collection from a preorder traversal', () => {
    const testTree = new BinarySearchTree();
    testTree.add(1);
    testTree.add(2);
    testTree.add(3);
    testTree.add(0.5);
    const testArray = testTree.preOrder(testTree.root);
    expect(testArray).toEqual([1, 0.5, 2, 3]);
  });

  it('can successfully return a collection from an inorder traversal', () => {
    const testTree = new BinarySearchTree();
    testTree.add(1);
    testTree.add(2);
    testTree.add(3);
    testTree.add(0.5);
    const testArray = testTree.inOrder(testTree.root);
    expect(testArray).toEqual([0.5, 1, 2, 3]);
  });

  it('can successfully return a collection from a postorder traversal', () => {
    const testTree = new BinarySearchTree();
    testTree.add(1);
    testTree.add(2);
    testTree.add(3);
    testTree.add(0.5);
    const testArray = testTree.postOrder(testTree.root);
    expect(testArray).toEqual([0.5, 2, 3, 1]);
  });

});
