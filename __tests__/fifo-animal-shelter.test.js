const { Queue } = require('../challenges/fifoAnimalShelter/fifo-animal-shelter');

describe('First in first out animal shelter queue', () => {
  it('can add an animal node to the queue', () => {
    const queue = new Queue();
    queue.enqueue('cat');
    expect(queue.front.value).toEqual('cat');
    expect(queue.last.value).toEqual('cat');
    queue.enqueue('dog');
    expect(queue.front.value).toEqual('cat');
    expect(queue.last.value).toEqual('dog');
    queue.enqueue('cat');
    expect(queue.front.value).toEqual('cat');
    expect(queue.last.value).toEqual('cat');
  });

  it('can take a preferred animal from the queue', () => {
    const queue = new Queue();
    queue.enqueue('cat');
    queue.enqueue('cat');
    queue.enqueue('dog');
    queue.enqueue('cat');
    expect(queue.dequeue('dog')).toEqual('dog');
    expect(queue.dequeue('dog')).toEqual('Animal not available');
  });
});
