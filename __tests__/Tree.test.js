const { BinarySearchTree } = require('../challenges/tree/Tree');

describe('binary search tree recursive implementation', () => {
  it('should have a constructor function that creates a BST with a null root if no arguments are passed', () => {
    const testTree = new BinarySearchTree();
    expect(testTree.root).toEqual(null);
  });
  it('should have a constructor function that creates a BST with a root node if a value is passed', () => {
    const testTree = new BinarySearchTree();
    expect(testTree.firstStack).toEqual({
      top: null
    });
    expect(testTree.secondStack).toEqual({
      top: null
    });
  });

  it('should have an enqueue function that takes a value and pushes it onto the firstStack', () => {
    const testTree = new BinarySearchTree();
    testTree.enqueue(1);
    expect(testTree.firstStack.peek()).toBe(1);
  });

  it('should have an dequeue function that returns the value from the node at the front of the queue using FIFO ordering', () => {
    const testTree = new BinarySearchTree();
    testTree.enqueue(1);
    testTree.enqueue(2);
    expect(testTree.dequeue()).toBe(1);
  });
});
