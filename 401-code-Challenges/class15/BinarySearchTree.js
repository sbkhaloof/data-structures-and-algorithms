'use strict'
const Node = require('./node')
const BinaryTree = require('./BinaryTree');
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    add(value) {

        let node = new Node(value);
        let addValue = (node, current) => {
            if (node.value < current.value) {
                if (!current.left) {
                    current.left = node;
                } else {
                    addValue(current.left, node)
                }
                if (!current.right) {
                    current.right = node
                } else {
                    addValue(current.right, node)
                }
            }
        }
        if (!this.root) {
            this.root = node
        } else {
            addValue(this.root, node)
        }
    }
//-------------------------------------------------------------------//
    Contains(value) {
        if (!this.root.value) {
            return false;
          }
      
          let searchValue = (current, value) => {
            if (current.value === value) {
              return true;
            } else if (current.value > value) {
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