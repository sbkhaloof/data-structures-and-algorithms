"use strict"

class BinaryTree {
    constructor() {
        this.root = null
    }
    preOrder() {
        /*
         root left right
        */
        let newArr = [];

        let recursive = (node) => {
            newArr.push(node.value);
            if (node.left) recursive(node.left);
            if (node.right) recursive(node.right);
        }

        recursive(this.root);

        return newArr;
    }
    inOrder() {
        /*
        left -> root -> right
       */
        let newArr = [];

        let recursive = (node) => {
            if (node.left) recursive(node.left);
            newArr.push(node.value);
            if (node.right) recursive(node.right);
        }

        recursive(this.root);

        return newArr;
    }
    postOrder() {
        /*
        left -> right -> root
       */
        let newArr = [];

        let recursive = (node) => {
            if (node.left) recursive(node.left);
            if (node.right) recursive(node.right);
            newArr.push(node.value);
        }

        recursive(this.root);

        return newArr;

    }

    treeMax() {
        if (!this.root) {
            return 'the tree is empty'
        }
        let maxNumber = this.root.value;
        let travers = (node) => {
            if (node.left) travers(node.left);
            if (node.right) travers(node.right);
            if (node.value > maxNumber) maxNumber = node.value;
        };

        travers(this.root);
        return maxNumber;
    }
    breadthFirstSearch(tree) {
        if (!this.root) {
          return "empty";
        }
        let queue = [tree];
        let result = [];
        while (queue.length > 0) {
          let item = queue.shift();
          let value = item.value;
          console.log(value);
          result.push(value);
          if (item.left == null && item.right == null) {
            continue;
          }
          if (item.left != null) {
            queue.push(item.left);
          }
    
          if (item.right != null) {
            queue.push(item.right);
          }
        }
        return result;
      }
    }
    
module.exports = BinaryTree;