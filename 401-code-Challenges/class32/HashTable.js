"use strict";
// declear class node and pass the value property
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// declear linked list class with head property is null
class LinkedList {
    constructor() {
        this.head = null;
      }
      append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        } 
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
}
//  ----------------- HashMap 


// declear hash map class with size property and map as new array 
class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  
  // hash function to return the index of each value 
  hash(key) {
    return key.split('').reduce((acc, char)=> {
        // console.log("char.charCodeAt(0) =====> ", char.charCodeAt(0))
        return acc + char.charCodeAt(0);
    }, 0) * 7 % this.size;
}

  // add to add value with key to hashmap class
  add(key, value) {
    
    let hash;
    if (typeof key == "number") {
      hash = key;
    } else {
      hash = this.hash(key);
    }
    if (!this.map[hash]) {
        this.map[hash] = new LinkedList();
    }
    let entry = { [key] : value} 
    this.map[hash].append(entry);
}


  // get to read from hash map at specific key 
  get(key){
    let hash=this.hash(key)
    if(!this.map[hash]) return null 
    let index=this.map[hash]
    let current=index.head
    if(!current) return 'does not exiset'
    if(current.value[key]) return current.value[key]
    while(current.next){
        current=current.next
        if(current.value[key]) return current.value[key]
    }
}

  // contains to search if this key is exisst at hashmap
  contain(key){
    let hash=this.hash(key)
    if(!this.map[hash]) return false 
    let index=this.map[hash]
    let current=index.head
    if(!current) return false
    if (current.value[key]) return true;

  while (current.next) {
    current = current.next;
    if (current.value[key]) return true;
  }

}
  // treeIntersection to Find all values found to be in 2 binary trees (intersection)
  treeIntersection(firstTree, secondTree) {
      //declear key ,counter ,hash and result array which will be return 
    let key;
    let coun = 0;
    let hash;
    let resultsArray = [];
    // traverse through the each tree and add it's values to hashmap 
    let traverseTree = (node) => {
      key = node.value;
      this.add(key, "noValue");
      if (coun > 0) {
        typeof key == "number" ? (hash = key) : this.hash(key);
        if (this.map[hash].head.next) {
            resultsArray.push(hash);
        }
      }
      if (node.left) {
        traverseTree(node.left);
      }
      if (node.right) {
        traverseTree(node.right);
      }
    };
    traverseTree(firstTree.root);
    coun++;
    traverseTree(secondTree.root);
// return the result array which have the intersection between to binary tree
    return resultsArray;
  }
}




module.exports = {Hashmap,Node};