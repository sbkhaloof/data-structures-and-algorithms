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
} module.exports = BinaryTree;