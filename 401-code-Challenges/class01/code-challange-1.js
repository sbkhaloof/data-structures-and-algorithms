'use strict';

let input = [1, 2, 3, 4, 5, 6]
// for loop method 
function reverseArray(input) {
    let ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

console.log(reverseArray(input));

// Using the Unshift() Method

function reverseArray(input){
    let arr1=new Array;
input.forEach(element => {
    arr1.unshift(element)
});
return arr1;
}
console.log(reverseArray(input));

