const mergeLists = (linkedListOne, linkedListTwo) => {

  if(!linkedListOne.head) return linkedListTwo;

  let currentOne, currentTwo, temp;
  currentOne = linkedListOne.head;
  currentTwo = linkedListTwo.head;

  while(currentTwo) {
    temp = currentOne.next;
    currentOne.next = currentTwo;
    currentTwo.next = temp;

    currentOne = currentOne.next;
  }
    
  return linkedListOne;
};
    
module.exports = { mergeLists };
