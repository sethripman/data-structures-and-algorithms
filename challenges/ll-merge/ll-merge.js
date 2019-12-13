const mergeLists = (linkedListOne, linkedListTwo) => {

  if(!linkedListOne.head) return linkedListTwo;

  let currentOne, currentTwo, temp;
  currentOne = linkedListOne.head;
  currentTwo = linkedListTwo.head;

  while(currentTwo) {
    temp = currentOne.next;
    currentOne.next = currentTwo;
    currentOne = currentTwo;
    currentTwo = temp;
  }
    
  return linkedListOne;
};
    
module.exports = { mergeLists };
