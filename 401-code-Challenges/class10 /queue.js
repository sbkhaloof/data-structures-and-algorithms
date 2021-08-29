"use strict"
const Node=require('./node');
class Queue{
    constructor(){
        this.front=null
        
    }
    enqueue(value){
        let newNode= new Node(value);
        if (!this.front) {
          this.front = newNode;
          return
        } 
          let currentNode = this.front;
          while (currentNode.next) {
            currentNode = currentNode.next;
          }
          currentNode.next = newNode;
    }
    dequeue(){
        let deltedNode=this.front
        if (!this.front) return 'Queue is empty'  
    
        this.front=this.front.next
        return deltedNode.value
       }
    peek(){
        if(this.front){
            return this.front.value;
        }
        throw new Error('the queue  is empty')
    }
    isEmpty(){
        if(this.front){return false;}
        return true;
    }
}
module.exports=Queue;