const { LinkedList } = require('../challenges/linkedList/LinkedList');

describe('append function', () => {
  it('should take a value and append a new Node with that value at the end of the list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);

    linkedList.append(0);

    expect(linkedList.toString()).toEqual('1 -> 2 -> 3 -> 0');
  });
});

describe('insertBefore function', () => {
    it('should take a value and append a new Node with that value at the end of the list', () => {
      const linkedList = new LinkedList();
      linkedList.insert(3);
      linkedList.insert(2);
      linkedList.insert(1);
  
      linkedList.append(0);
  
      expect(linkedList.toString()).toEqual('1 -> 2 -> 3 -> 0');
    });
  });

describe('insertAfter function', () => {
  it('should take an array and a value as input and return a new array identical to the original except with the value inserted in the middle position of the array', () => {
    expect(arrayShift([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    expect(arrayShift([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});*/
