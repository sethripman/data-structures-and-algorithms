const { ll-merge } = require('../challenges/ll-merge/ll-merge');
const { LinkedList } = require('../challenges/linkedList/LinkedList');

describe('linked list merge function', () => {
  it('should take two linked lists and zipper merge them such that nodes alternate, and return the unified linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(1);

    const linkedList2 = new LinkedList();
    linkedList2.insert(4);
    linkedList2.insert(9);
    linkedList2.insert(5);


    expect(arrayShift([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    expect(arrayShift([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('should take two linked lists and zipper merge them such that nodes alternate, and return the unified linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(1);

    const linkedList2 = new LinkedList();
    linkedList2.insert(4);
    linkedList2.insert(9);
    linkedList2.insert(5);


    expect(arrayShift([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    expect(arrayShift([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('should take two linked lists and zipper merge them such that nodes alternate, and return the unified linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(1);

    const linkedList2 = new LinkedList();
    linkedList2.insert(9);
    linkedList2.insert(5);


    expect(arrayShift([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    expect(arrayShift([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
