"use strict";
const Queue=require('../queue')
describe("queue test",()=>{
    it('should successfully enqueue into a queue',()=>{
        let queue = new Queue();
        queue.enqueue("a");
    
        expect(queue.front.value).toBe("a");

    })
    it('should successfully enqueue multiple values into a queue',()=>{
        let queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");

    expect(queue.front.value).toBe("a");
  
    })
    it('should successfully dequeue out of a queue the expected value',()=>{
        let queue = new Queue();
        queue.enqueue("a");
        queue.enqueue("b");
        queue.enqueue("c");
        queue.dequeue();
    
        expect(queue.front.value).toBe("b");
       
        expect(queue.dequeue()).toBe("b");
    })
    it('should successfully enqueue multiple values into a queue',()=>{
        let queue = new Queue();
        queue.enqueue("a");
        queue.enqueue("b");
        queue.enqueue("c");
        queue.enqueue("d");
        expect(queue.front.value).toBe("a");
    })
    it('should  successfully peek into a queue, seeing the expected value',()=>{
        let queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");

    expect(queue.front.value).toBe("a");
    
    expect(queue.peek()).toBe("a");
    })
    it('should  successfully empty a queue after multiple dequeues',()=>{
        let newQueue = new Queue();
        newQueue.enqueue(5);
        newQueue.enqueue(6);
        newQueue.dequeue();
        newQueue.dequeue();
        expect(newQueue.front).toBeNull();
    })

    it('should  successfully instantiate an empty queue',()=>{
        let newQueue = new Queue();
        expect(newQueue.front).toBeNull();
    })
    it("Calling dequeue or peek on empty queue raises exception", () => {
        let newQueue = new Queue();
        expect((newQueue.dequeue())).toEqual('Queue is empty');
      });

      it("isEmpty ", () => {
        let newQueue = new Queue();
        
        expect((newQueue.isEmpty())).toEqual(true)
        newQueue.enqueue(1)
        expect((newQueue.isEmpty())).toEqual(false)
      });
   


})