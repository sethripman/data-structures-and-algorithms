const arrayBinarySearch = (array, searchKey) => {
  let startIndex = 0;
  let endIndex = array.length - 1;
    
  while(startIndex <= endIndex){
    let midIndex = Math.floor((startIndex + endIndex) / 2);
    if(array[midIndex] === searchKey) return midIndex;
    if(array[midIndex] > searchKey) endIndex = midIndex - 1;
    if(array[midIndex] < searchKey) startIndex = midIndex + 1;
    if(startIndex > endIndex) return -1;
  }
};
  
module.exports = { arrayBinarySearch };
