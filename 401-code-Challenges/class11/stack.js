"use strict";

const Node=require('./node');

class Stack{
    constructor(){
        this.top=null
    }


    push(value) {
        let newNode = new Node(value);
        if (this.top) {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.top = newNode;
    }
    pop() {
        if (this.top) {
            const temp = this.top;
            let removeItem = this.top.value;
            this.top = temp.next;
            temp.next= null;
            return removeItem;
        }
        throw new Error('the stack is empty')
    }


    peek() {
        if (this.top) {
            return this.top.value
        }
        throw new Error("the satck is empty")

    }
    isEmpty() {
        if (this.top) { return false; }
        else { return true; }

    }
}
module.exports=Stack;