"use strict";
const Stack = require('../stack');
describe('stack', () => {
    it('should  push onto a stack', () => {
        let stack = new Stack();
        stack.push('a');
        stack.push('b');
        expect(stack.top.value).toBe('b')

    })
    it('should  push multiple values onto a stack', () => {
        let stack = new Stack();
        stack.push('a');
        stack.push('b');
        stack.push('c');
        stack.push('d');
        expect(stack.top.value).toBe('d')
    })
    it('should  pop off the stack', () => {
        let stack = new Stack();
        stack.push('a');
        stack.push('b');
        
        expect(stack.top.value).toBe('b');
        expect(stack.pop()).toBe('b');
    })
    it('should empty a stack after multiple pops', () => {
        let stack = new Stack();
        stack.push('a');
        stack.push('b');
        stack.push('c');
        stack.push('d');
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        expect(stack.top).toBe(null);
    })
    it('should peek the next item on the stack',()=>{
        let stack = new Stack();
        stack.push('a');
        stack.push('b');
        stack.push('c');
        stack.push('d');
        stack.peek();
        expect(stack.peek()).toBe('d');
    })
    it('should instantiate an empty stack',()=>{
        let stack = new Stack();
        let newStack = new Stack();
        newStack.push("a");
        newStack.push("b");

        expect(stack).toBeInstanceOf(Stack);
        expect(newStack.isEmpty()).toBe(false);
    })
})