'use strict'
const  HashTable=require('./hashTable')


const str ="the best way the good one";
// create function take string as argument 
function findFirstRepeat(str) {
    // split the string into word array
  let hash = str.split(" ");
  // create an instance of hashTable 
  let hashmap = new HashTable(hash.length);
  // loop through the split string 
  for (let i = 0; i < hash.length; i++) {
      // check if the word at this index not exissit in the hashtable
    if (!hashmap.contains(hash[i])) {
        // then add this value to hashtable 
      hashmap.add(hash[i], hash[i]);
    } else {
        // otherwise return the repeated word 
      return hash[i];
    }
  }// if there isnt word is repeated return null 
  return null;
}
console.log(...findFirstRepeat(str));


module.exports=findFirstRepeat;

