"use strict";

const Node=require('./node');

class Stack{
    constructor(){
       this.first=null,
       this.last=null,
       this.length=0
    }


    push(value) {
        let newNode = new Node(value);
        if (this.lengt===0){
            this.first=newNode;
            this.last=newNode;
        }else{
            let temp=this.first;
            this.first=newNode
            this.first.next=temp;
        }
        this.length++;
        return this.length;
    }
    pop() {
        if (this.length===0) 
            return null;
            let temp=this.first;
        if(this.length===1){
            this.last=null;
        }
        this.first=this.first.next;
        this.length--;
        return temp
        
    }


    peek() {
        let value;
    if (this.first) {
      value = this.first.value;
      return value;
    }
    }
    isEmpty() {
        if (!this.first) {
            return false;
          }
          return true;
        }

    }

module.exports=Stack;