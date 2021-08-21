const Node = require('./node')
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    insert(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        }
        else {
            this.tail = node;
            this.tail.nexx = node;
        }
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

    includes(value) {
        let curent = this.head;
        while (curent) {
            if (curent.value === value) {
                console.log('this value includeed in the list');
                return true;
            }
            curent = curent.next;

        }
        console.log('this value did not include in the list');
        return false;

    }
    toString() {
        let current = this.head;
        if (!current) {
          throw new Error("the linked list does not exisit");
        }
    
        let format = "";
        while (current) {
          format += `{${current.value}}-->`;
          current = current.next;
        }
        return (format += "NULL");
      }
    }

let list = new LinkedList();
list.insert(1);
list.append(2);


console.log(list.toString());
console.log(list.includes(2));


module.exports = LinkedList;
