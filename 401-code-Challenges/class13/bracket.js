'use strict'
const Stack=require('./stack');
function validateBrackets(bracket){
    const stack=new Stack();
  for(let i=0;i<bracket.length;i++)
  {
      if(bracket[i]=='('||bracket[i]=='{'||bracket[i]=='['){
          stack.push(bracket[i])
      }
      else if (
        (stack.peek() == "[" && bracket[i] == "]") ||
        (stack.peek() == "{" && bracket[i] == "}") ||
        (stack.peek() == "(" && bracket[i] == ")")
      ) {
        stack.pop();
      }
}
  if (stack.isEmpty()) {
    return false;
  } else {
    return true;
  }
}
let string1 = "{()[]}";
let string2 = "{}(){}";
let string3 = "()[[Extra Characters]]";
let string4 = "(){}[[]]";
let string5 = "{}{Code}[Fellows](())";
let string6 = "[({}]";
let string7 = "(](";
let string8 = "{(})";

console.log(validateBrackets(string1));
console.log(validateBrackets(string2));
console.log(validateBrackets(string3));
console.log(validateBrackets(string4));
console.log(validateBrackets(string5));
console.log(validateBrackets(string6));
console.log(validateBrackets(string7));
console.log(validateBrackets(string8));

module.exports=validateBrackets;
