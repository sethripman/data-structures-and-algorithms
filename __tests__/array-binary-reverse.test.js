const { arrayBinarySearch } = require('../challenges/arrayBinarySearch/array-binary-search');

describe('arrayBinarySearch', () => {
  it('should find the index of a value in an array or return -1', () => {
    expect(arrayBinarySearch([4, 8, 15, 16, 23, 42], 15))
      .toEqual(2);
    expect(arrayBinarySearch([11, 22, 33, 44, 55, 66, 77], 90))
      .toEqual(-1);


    const bigArray = [];
    for(let i = 0; i < 100; i++){
      bigArray[i] = i;
    }
    expect(arrayBinarySearch(bigArray, 12))
      .toEqual(12);

    const biggerArray = [];
    for(let i = 0; i < 1000; i++){
      biggerArray[i] = i;
    }
    expect(arrayBinarySearch(biggerArray, 900))
      .toEqual(900);

    const biglyArray = [];
    for(let i = 0; i < 10000; i++){
      biglyArray[i] = i;
    }
    expect(arrayBinarySearch(biglyArray, 9000))
      .toEqual(9000);

    const chonkingArray = [];
    for(let i = 0; i < 100000; i++){
      chonkingArray[i] = i;
    }
      
    expect(arrayBinarySearch(chonkingArray, 90000))
      .toEqual(90000);

    expect(arrayBinarySearch(chonkingArray, 999999999999))
      .toEqual(-1);
  });
});
