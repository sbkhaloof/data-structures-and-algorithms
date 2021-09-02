'use stict'

const Node=require('../node');
const Stack=require('../stack')
describe('get max test',()=>{
    it ('should test get max function',()=>{
        let stack = new Stack();
        stack.push(10);
        stack.push(30);
        stack.push(20);
    
        expect(stack.gitMax()).toEqual(30);
      });
    it('test get max for empty stack',()=>{
        let stack=new Stack();
        expect(stack.gitMax()).toEqual('the stack is empty !!');
    })
})