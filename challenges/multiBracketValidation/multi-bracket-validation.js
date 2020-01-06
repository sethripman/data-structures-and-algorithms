const { Stack } = require('../queueWithStacks/queue-with-stacks');

const multiBracketValidation = input => {
  const stack = new Stack();
  for(let i = 0; i < input.length; i++){
    const character = input.charAt(i);
    const openBrackets = /[({[]/;
    const closingBrackets = /[)}\]]/;
    let opener;
    let closer;

    if(openBrackets.test(character)) opener = character.match(openBrackets)[0];
    if(closingBrackets.test(character)) closer = character.match(closingBrackets)[0];
    if(opener) stack.push(opener);
    if(closer){
      closer = closer === ')' ? '(' : closer === ']' ? '[' : closer === '}' ? '{' : null;
      if(closer !== stack.peek()) return false;
      stack.pop();
    }
  }
  
  return !stack.top;
};

module.exports = { multiBracketValidation };
