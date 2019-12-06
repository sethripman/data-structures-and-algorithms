const { arrayShift, arrayRemoveMiddle } = require('../challenges/arrayShift/array-shift');

describe('array shift function', () => {
  it('should take an array and a value as input and return a new array identical to the original except with the value inserted in the middle position of the array', () => {
    expect(arrayShift([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    expect(arrayShift([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
