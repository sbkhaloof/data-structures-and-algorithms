'use strict'
const Node = require('./node')
const BinaryTree = require('./BinaryTree');
class BinarySearchTree  extends BinaryTree {
  constructor() {
    super();
    this.root = null
  }
  add(value) {
    let node = new Node(value);
    let addValue = (current, node) => {
      if (node.value < current.value) {
        if (!current.left) {
          current.left = node;
        } else {
          addValue(current.left, node);
        }
      } else {
        if (!current.right) {
          current.right = node;
        } else {
          addValue(current.right, node);
        }
      }
    };

    if (!this.root) {
      this.root = node;
    } else {
      addValue(this.root, node);
    }
  }






  //-------------------------------------------------------------------//
/*
Finding something is incredibly simple, just move left or right relative to the current value and return true if we hit something that matches.
*/

  Contains(value) {
    if (!this.root.value) {   // if tree is empty
      return false;
    }

    let searchValue = (current, value) => {  // compare the current .value with pass value 
      if (current.value === value) {
        return true;
      } else if (current.value > value) {   // move through tree left and right to find value match with the pass one 
        if (!current.left) {
          return false;
        }
        return searchValue(current.left, value);
      } else {
        if (!current.right) {
          return false;
        }
        return searchValue(current.right, value);
      }
    };

    return searchValue(this.root, value);
  }
}

// console.log(expextedValue);

module.exports = BinarySearchTree;