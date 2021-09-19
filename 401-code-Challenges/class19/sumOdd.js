'use strict'
const Node=require('./node');

const BinaryTree=require('./binaryTree');
function sumOdd(tree)
{
    if(!tree){return('empty tree')}
    let sum=0
    let recursive=(node)=>{
    if(node.left){recursive(node.left)}
    if(node.right){recursive(node.right)}
    if(node.value %2!==0){sum=sum+node.value}
    }
    recursive(tree.root)
    return sum;
}

let one = new Node(8);
let two = new Node(3);
let three = new Node(10);
let four = new Node(1);
let five = new Node(6);
let six = new Node(14);
let seven = new Node(4);
let eight = new Node(7);
let nine = new Node(13);
one.left = two;
one.right = three;
two.left = four;
two.right = five
five.left = seven;
five.right = eight;
three.right = six;
six.left = nine;
let tree = new BinaryTree();
tree.root=one;
// console.log(tree.root);
const check = sumOdd(tree)
console.log(check);

module.exports = sumOdd;