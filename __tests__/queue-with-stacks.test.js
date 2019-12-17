const { PseudoQueue } = require('../challenges/queueWithStacks/queue-with-stacks');

describe('queue with two stacks data structure', () => {
  it('should have a constructor function that creates a Pseudoqueue instance with first stack and second stack properties', () => {
    const testQueue = new PseudoQueue();
    expect(testQueue.firstStack).toEqual({
      top: null
    });
    expect(testQueue.secondStack).toEqual({
      top: null
    });
  });

  it('should have an enqueue function that takes a value and pushes it onto the firstStack', () => {
    const testQueue = new PseudoQueue();
    testQueue.enqueue(1);
    expect(testQueue.firstStack.peek()).toBe(1);
  });

  it('should have an dequeue function that returns the value from the node at the front of the queue using FIFO ordering', () => {
    const testQueue = new PseudoQueue();
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    expect(testQueue.dequeue()).toBe(1);
  });
});
