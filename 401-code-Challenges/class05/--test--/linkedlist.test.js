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
        let newList = new LinkedList();
        let initialValue = 'First Item';
        newList.append(initialValue);
        expect(newList.head.value).toEqual(initialValue);

        let anotherOne = 'Second Item';
        newList.append(anotherOne);
        expect(newList.head.next.value).toEqual(anotherOne);
        expect(newList.head.next.next).toBeNull();
        expect(newList.head.value).toEqual(initialValue);
    });

    it('will return true when finding a value within the linked list that exists',async()=>{
        let newList=new LinkedList;
        newList.insert(1);
        newList.append(2);
        expect(newList.includes(2)).toEqual(true);
    })
    it(' Will return false when searching for a value in the linked list that does not exist',async()=>{
        let newList=new LinkedList;
        newList.insert(1);
        newList.append(2);
        expect(newList.includes(4)).toEqual(false);
    })
    it('Can properly return a collection of all the values that exist in the linked list',async()=>{
        let newList=new LinkedList;
        newList.insert(1);
        newList.append(2);
        expect(newList.toString()).toEqual('{1}-->{2}-->NULL');
    })
})