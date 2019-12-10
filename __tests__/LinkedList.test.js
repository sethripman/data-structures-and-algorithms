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

  it('should take a value and append a new Node with that value at the end of the list, multiple times', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);

    linkedList.append(4);
    linkedList.append(5);

    expect(linkedList.toString()).toEqual('1 -> 2 -> 3 -> 4 -> 5');
  });
});

describe('insertBefore function', () => {
  it('should take a value and a new value, and append a new Node with that new value before the node that contains that value', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
  
    linkedList.insertBefore(2, 1.5);
  
    expect(linkedList.toString()).toEqual('1 -> 1.5 -> 2 -> 3');
  });
});

describe('insertAfter function', () => {
  it('should take a value and a new value, and append a new Node with that new value after the node that contains that value', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
  
    linkedList.insertAfter(2, 2.5);
  
    expect(linkedList.toString()).toEqual('1 -> 2 -> 2.5 -> 3');
  });

  describe('kthFromEnd function', () => {
    it('should take a value k, and return the value of the node that is k from the end of the linked list', () => {
      const linkedList = new LinkedList();
      linkedList.insert(4);
      linkedList.insert(3);
      linkedList.insert(2);
      linkedList.insert(1);
    
      const a = linkedList.kthFromEnd(0);
      const b = linkedList.kthFromEnd(2);
      const c = linkedList.kthFromEnd(6);
      const d = linkedList.kthFromEnd(-1);
    
      expect(a).toEqual();
      expect(b).toEqual();
      expect(c).toEqual();
      expect(d).toEqual();

    });
  });
});
