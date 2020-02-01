const { BinarySearchTree } = require('../challenges/tree/Tree');
const { FizzbuzzTree } = require('../challenges/fizzbuzz-tree/FizzbuzzTree');

describe('binary search tree recursive implementation', () => {

  it('can apply the rules of fizzbuzz to an inputted tree', () => {
    const testTree = new BinarySearchTree();
    testTree.add(1);
    testTree.add(2);
    testTree.add(3);
    testTree.add(0.5);
    const testArray = FizzbuzzTree(testTree);
    expect(testArray).toEqual([1, 0.5, 2, 3]);
  });

});
