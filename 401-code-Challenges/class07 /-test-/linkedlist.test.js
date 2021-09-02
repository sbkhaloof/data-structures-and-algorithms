let LinkedList=require('../linkedlist');
describe('linkedlist ',()=>{
    it('should test successfully instantiate an empty linked list',async()=>{
        let list=new LinkedList();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toEqual(0);
    })
    it('should test insert into the linked list',async()=>{
        let list=new LinkedList();
        list.insert(1);
        expect(list.head.value).toEqual(1);
        expect(list.head.next).toBeNull()
    })
    it('should test insert multiple nodes into the linked list',async()=>{
        let list=new LinkedList();
        list.insert(1);
        list.append(2);
        expect(list.head.value).toEqual(1);
        expect(list.head.next.value).toEqual(2)

    })
    it('append()', ()=> {
        let list = new LinkedList();
        let initialValue = 'First Item';
        list.append(initialValue);
        expect(list.head.value).toEqual(initialValue);

        let anotherOne = 'Second Item';
        list.append(anotherOne);
        expect(list.head.next.value).toEqual(anotherOne);
        expect(list.head.next.next).toBeNull();
        expect(list.head.value).toEqual(initialValue);
    });
    it('shoud successfully insert a node before a node located i the middle of a linked list',()=>{
        let list=new LinkedList();
        list.insert(1);
        list.append(2);
        list.append(3);
        list.insertBefor(2,5);
        console.log(list.head.value);
        console.log(list.head.next.value);
        expect(list.head.value).toEqual(1);
        expect(list.head.next.value).toEqual(5);
    });
    it('should insert after',()=>{
        let list=new LinkedList();
        list.insert(1);
        list.append(2);
        list.append(3);
        list.insertAfter(1,5);
        console.log(list.head.value);
        console.log(list.head.next.value);
        expect(list.head.value).toEqual(1);
        expect(list.head.next.value).toEqual(5);
    })
    it('should return k_thFromEnd where k is greater than the length of the linked list',()=>{
        let list=new LinkedList();
        list.insert(1);
        list.append(2);
        list.append(3);
        list.append(5)
        
        expect(list.k_thFromEnd(7)).toEqual('Exception');
        
    })
    it('should return k_thFromEnd where k is not possitive number ',()=>{
        let list=new LinkedList();
        list.insert(1);
        list.append(2);
        list.append(3);
        list.append(5)
        
        expect(list.k_thFromEnd(-5)).toEqual('Exception');
        
    })
    it('should return k_thFromEnd where the k is equal iinkedlist lngth',()=>{
        let list=new LinkedList();
        list.insert(1);
        list.append(2);
        list.append(3);
        list.append(5)
        
        expect(list.k_thFromEnd(4)).toEqual('Exception');
        
    })
    it('should return k_thFromEnd where lingth of linked list is one ',()=>{
        let list=new LinkedList();
        list.insert(1);
                
        expect(list.k_thFromEnd(0)).toEqual(1);
        
    })
    it("kthFromEnd() “Happy Path” where k is not at the end, but somewhere in the middle of the linked list", () => {
        let list=new LinkedList();
        list.insert(1);
        list.append(2);
        list.append(3);
        list.append(5)
        
        expect(list.k_thFromEnd(2)).toEqual(2);

      });
})