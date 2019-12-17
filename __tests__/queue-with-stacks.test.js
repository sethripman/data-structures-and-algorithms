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
});
