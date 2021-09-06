"use strict"

const Stack=require('./stack')
class PseudoQueue{
    constructor(){
        // this.front=null
        this.stack1=new Stack();
        this.stack2=new Stack()
        
    }
    enqueue(value){
        this.stack1.push(value);
    }
    dequeue(){
       if(this.stack2.isEmpty()){
        while(!this.stack1.isEmpty()){
            this.stack2.push(this.stack1.pop())
          }
        }
        return this.stack2.pop();
       }
       
    // peek(){
    //     if(this.front){
    //         return this.front.value;
    //     }
    //     throw new Error('the queue  is empty')
    // }
    // isEmpty(){
    //     if(this.front){return false;}
    //     return true;
    // }
}
module.exports=PseudoQueue;