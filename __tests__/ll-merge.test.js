const { mergeLists } = require('../challenges/ll-merge/ll-merge');
const { LinkedList } = require('../challenges/linkedList/LinkedList');

describe('linked list merge function', () => {
  it('should take two linked lists and zipper merge them such that nodes alternate, and return the unified linked list', () => {
    const linkedList1 = new LinkedList();
    linkedList1.insert(2);
    linkedList1.insert(3);
    linkedList1.insert(1);

    const linkedList2 = new LinkedList();
    linkedList2.insert(4);
    linkedList2.insert(9);
    linkedList2.insert(5);

    const mergedList = mergeLists(linkedList1, linkedList2);

    expect(mergedList.toString()).toEqual('1 -> 1.5 -> 2 -> 3');
  });

  it('should take two linked lists and zipper merge them such that nodes alternate, and return the unified linked list', () => {
    const linkedList1 = new LinkedList();
    linkedList1.insert(3);
    linkedList1.insert(1);

    const linkedList2 = new LinkedList();
    linkedList2.insert(4);
    linkedList2.insert(9);
    linkedList2.insert(5);

    const mergedList = mergeLists(linkedList1, linkedList2);

    expect(mergedList.toString()).toEqual('1 -> 1.5 -> 2 -> 3');
  });

  it('should take two linked lists and zipper merge them such that nodes alternate, and return the unified linked list', () => {
    const linkedList1 = new LinkedList();
    linkedList1.insert(2);
    linkedList1.insert(3);
    linkedList1.insert(1);

    const linkedList2 = new LinkedList();
    linkedList2.insert(9);
    linkedList2.insert(5);

    const mergedList = mergeLists(linkedList1, linkedList2);

    expect(mergedList.toString()).toEqual('1 -> 1.5 -> 2 -> 3');
  });
});
