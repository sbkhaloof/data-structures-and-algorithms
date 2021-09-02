'use strict'
const Node=require('../node');
const BinaryTree=require('../BinaryTree');
const BinarySearchTree =require('../BinarySearchTree')
describe('Binary Tree && Binary Search Tree',()=>{
it('successfully instantiate an empty tree',()=>{
let tree=new BinarySearchTree();
expect(tree.root).toBeNull();
})
it('successfully instantiate a tree with a single root node',()=>{
let tree=new BinarySearchTree();
tree.add(1);
expect(tree.root.value).toEqual(1);
expect(tree.Contains(1)).toEqual(true)
})
it('successfully add a left child and right child to a single root node',()=>{
  let tree = new BinarySearchTree();
    tree.add(2);
    tree.add(1);
    tree.add(9);
    console.log(tree.root);
    expect(tree.root.value).toEqual(2);
    expect(tree.root.left.value).toEqual(1);
    expect(tree.root.right.value).toEqual(9);
})
it('successfully return a collection from a preorder traversal',()=>{
  let expextedValue =[23,8,4,16,27,25,26,85]
  let tree = new BinarySearchTree();
    tree.add(23);
  tree.add(27);
  tree.add(8);
  tree.add(4);
  tree.add(16);
  tree.add(25); 
  tree.add(85);
  tree.add(26);

  console.log('=======>>>>',tree.preOrder());
  expect(tree.preOrder()).toEqual(expextedValue);
})
it('successfully return a collection from an inorder traversal',()=>{
  let expextedValue =[4,8,16,23,25,26,27,85]
  let tree = new BinarySearchTree();
    tree.add(23);
  tree.add(27);
  tree.add(8);
  tree.add(4);
  tree.add(16);
  tree.add(25); 
  tree.add(85);
  tree.add(26);

  console.log('=======>>>>',tree.inOrder());
  expect(tree.inOrder()).toEqual(expextedValue);
})
it('successfully return a collection from a postorder traversal',()=>{
  let expextedValue =[4,16,8,26,25,85,27,23]
  let tree = new BinarySearchTree();
    tree.add(23);
  tree.add(27);
  tree.add(8);
  tree.add(4);
  tree.add(16);
  tree.add(25); 
  tree.add(85);
  tree.add(26);

  console.log('=======>>>>',tree.postOrder());
  expect(tree.postOrder()).toEqual(expextedValue);
})
})