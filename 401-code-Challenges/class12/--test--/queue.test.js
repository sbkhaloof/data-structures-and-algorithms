'use strict';
const Queue= require('../queue');
describe('queue test',()=>{
    it('enqueue test',()=>{
        let queue=new Queue();
        queue.enqueue('a');
        expect(queue.front.value).toBe('a');
    })
    it('dequeue test',()=>{
        let queue=new Queue();
        queue.enqueue('a');
        queue.enqueue('b');
        queue.dequeue();
        expect(queue.front.value).toBe('b')
      
    })
    it('is empty queue',()=>{
        let queue=new Queue();
        queue.enqueue('a');
        queue.enqueue('b');
        queue.enqueue('c');
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        expect(queue.front).toBeNull()
     })
})