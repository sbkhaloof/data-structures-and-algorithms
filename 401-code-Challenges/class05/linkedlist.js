const Node=require('./node')
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0
    }

    insert(value){
const node=new Node(value);
if(!this.head)
{
    this.head=node;
    this.tail=this.head;
}
else{
    this.tail=node;
    this.tail.nexx=node;
}
return this.head;
    }

    includes(value){
        let curent=this.head;
        while(curent){
            if(curent.value=== value){
                console.log('this value includeed in the list');
                return true;
            }
            curent=curent.next;

        }
       console.log('this value did not include in the list');
       return false;

    }
    toString(){
        let curent=this.head;
        if (!current) {
            throw new Error("the linked list does not exisit");
          }

        let style;
        while(curent){
            style +=`{${curent.value}} -->`;
            curent=curent.next;
        }
        return (style += "NULL");
    }
}

let list = new LinkedList();
list.insert(1);
list.append(2);


console.log(list.toString());
console.log(list.includes(2));


module.exports=LinkedList;
