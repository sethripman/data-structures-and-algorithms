// Reverse half the array in place
const halfReverse = (array) => {
  for(let i = 0; i <= Math.floor((array.length - 1) / 2); i++) {
    let current = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = current;
  }
  return array;
};

//Bogosort implementation of reverse - array.reverse used for confirming successful sort but not for reversing operation on array
const randomize = (array) => {
  let newArray = array.slice();
  for(let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const successfulReverse = (array, newArray) => {
  if(newArray === array.reverse()) return true;
  return false;
};

const dankReverse = (array) => {
  let finished = false;
  let newArray = [];
  while(finished === false){
    newArray = randomize(array);
    finished = successfulReverse(array, newArray);
  }
  return newArray;
};

// Pop reverse, two arrays
const popReverse = (array) => {
  let newArray = [];
  for(let i = array.length; i > 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
};

//map reverse, functional programming implementation
const mapReverse = array => [...array].map(array.pop, array);

module.exports = { mapReverse };

