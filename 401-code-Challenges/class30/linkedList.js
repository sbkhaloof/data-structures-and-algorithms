"use strict"

const Node=require('./node')//

class LinkedList{
    constructor(){
        this.head=null
    }
    // method to add node at the last of linked list
    add(value){
const newNode=new Node(value);
// 1. the linked list is empty 
if(!this.head){
    this.head=newNode;
    return
}
// 2. linked list not empty 
// declear pointer used to traverse through linked list 
    let current=this.head 
    while(current.next){
        current=current.next
    }
    // now add the node to linked list 
    current.next=newNode;
    }
}
module.exports=LinkedList;