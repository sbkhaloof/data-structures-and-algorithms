"use strict";
const {Hashmap,Node} = require("../HashTable");
const BinaryTree = require("../BinaryTree");


describe("hashmap-tree-intersection", () => {
  let first;
  let second;
  beforeAll(() => {
    //declear first tree and append values to it 
    let one = new Node(150);
    let two = new Node(300);
    let three = new Node(4);
    let four = new Node(700);
    let five = new Node(1600);
    let six = new Node(12);
    let seven = new Node(75);
    let eight = new Node(29);
    let nine = new Node(350);
    let ten = new Node(800);
    let eleven = new Node(40);

    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    five.left = six;
    five.right = seven;
    three.right = eight;
    three.left = nine;
    nine.left = ten;
    nine.right = eleven;

    //declear secound tree and append values to it 
    let one2 = new Node(42);
    let two2 = new Node(100);
    let three2 = new Node(4);
    let four2 = new Node(700);
    let five2 = new Node(1600);
    let six2 = new Node(125);
    let seven2 = new Node(75);
    let eight2 = new Node(2008);
    let nine2 = new Node(35);
    let ten2 = new Node(4);
    let eleven2 = new Node(900);

    one2.left = two2;
    one2.right = three2;
    two2.left = four2;
    two2.right = five2;
    five2.left = six2;
    five2.right = seven2;
    three2.right = eight2;
    three2.left = nine2;
    nine2.left = ten2;
    nine2.right = eleven2;

    first = new BinaryTree(one);
    second = new BinaryTree(one2);
  });
  // successfuly return the common nodes between two trees
  it("it should return the common nodes between two trees", () => {
    let hashTable = new Hashmap(500);
    let expectedResults = [700,1600,75,4,4]

    expect(hashTable.treeIntersection(first, second)).toEqual(
      expectedResults
    );
  });

  // check the next of uncommon elements is null in the hash table
  it("it should check the next of uncommon elements is null in the hash table", () => {
    let hashTable = new Hashmap(500);
    let expectedResults = [700,1600,75,4,4]
    expect(hashTable.treeIntersection(first, second)).toEqual(
      expectedResults
    );
    expect(hashTable.map[900].head.next).toBeNull();
    expect(hashTable.map[4].head.next).toBeTruthy();
  });
});