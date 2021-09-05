"use strict"

class BinaryTree {
    constructor() {
        this.root =null
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
        if(!this.root){
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
    

} module.exports = BinaryTree;