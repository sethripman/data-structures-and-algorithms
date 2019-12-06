const arrayShift = (array, value) => {
  const newArray = [];
  const targetIndex = Math.ceil((array.length) / 2);
  
  for(let i = 0; i < array.length + 1; i++){
    if(i < targetIndex){
      newArray[i] = array[i];
    }
    if(i === targetIndex){
      newArray[i] = value;
    }
    if(i > targetIndex){
      newArray[i] = array[i - 1];
    }
  }
  
  return newArray;
};
  
module.exports = { arrayShift };
