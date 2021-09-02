const Node = require('./node')
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    insert(val) {
        let newNode = new Node(val);
        if (!this.head) {
          this.head = newNode;
          this.tail = this.head;
        } else {
          this.tail = newNode;
          this.tail.next = newNode;
        }
        this.length++;
        return this.head;
      }

    append(value){
        let newNode = new Node(value);
        if (!this.head) {
          this.head = newNode;
        } else {
          let currentNode = this.head;
          while (currentNode.next) {
            currentNode = currentNode.next;
          }
          currentNode.next = newNode;
        }
    }
    insertBefor(value,newValue){
        let newNode=new Node(newValue);
        let current=this.head;
        if(current.value===value){
          newNode.next=current;
          this.head=newNode;
        }
        while (current.next) {
          if(current.next.value==value){
            newNode.next=current.next;
            current.next=newNode;
            break;
          }
          current=current.next;
        }

    }

   insertAfter(value,newValue){
    let newNode=new Node(newValue);
    let current=this.head;
    while (current) {
        if(current.value==value){
          newNode.next=current.next;
          current.next=newNode;
          break;
        }
        current=current.next;
      }
   }
}
    module.exports = LinkedList;