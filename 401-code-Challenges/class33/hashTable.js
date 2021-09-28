'use strict'
const LinkedList = require('./linkedList');

class HashTable {
    constructor(size) {
        this.buckets = new Array(size)
        this.size = size
    }

    hash(key) {
        return key.toString().length % this.size;
    }


    // Insert data
    add(key, value) {
        // send the key to the GetHash method.
        let hash = this.hash(key);
        console.log(hash, '..........................');
        //Check if something exists at that index already,if it doesn’t, add it with the key/value pair.
        if (!this.buckets[hash]) {
            this.buckets[hash] = new LinkedList();
        }
        // add new bucket
        let nweBucket = { [key]: value };
        this.buckets[hash].add(nweBucket)
      
    }
    // Search by key and get the data for this key 
    get(key) {
        let hash = this.hash(key);
        //Check if something exists at that index already,if it doesn’t, retrun null
        if (!this.buckets[hash]) return null

        let index = this.buckets[hash];
        // loop through the hash table to find the data then return it 
        let current = index.head;
        if (current.data[key]) return current.data[key];
        while (current.next) {
            current = current.next
            if (current.data[key]) return current.data[key]
        }
    }
    contains(key) {
        // send the key to the GetHash method.
        let hash = this.hash(key);
        //Check if something exists at that index already,if it doesn’t,return false.
        if (!this.buckets[hash]) return false;
        let index = this.buckets[hash];
        // check if the key exists at this index ,if not return false
        if (!index.head) return false;
        else {
            // else loop through the hash table and check again if the key is exists ; retrn true if you find it otherwise return false 
            let current = index.head;
            if (current.data[key]) return true;
            while (current.next) {
                current = current.next
                if (current.data[key]) return true
            }

        }
    }

    // create function leftJoin take two arrgument 
    leftJoin(firstHashTable, secondHashTable) {

        let finalResult = [];// declear empty array to return the result
        let value2 = null;
        // loop through first hash table and push the key and value to thefinalresult array
        for (let i = 0; i < firstHashTable.buckets.length; i++) {
          if (firstHashTable.buckets[i]) {
           const leftKey = Object.keys(firstHashTable.buckets[i].head.value)[0];
            const leftvalue1 = Object.values(firstHashTable.buckets[i].head.value)[0];
           // check if the second hash table have the match key with the first hash table
            if (secondHashTable.contains(leftKey)) {
                // find the value of this key  to add it to the same key in final result array
              value2 = Object.values(secondHashTable.buckets[i].head.value)[0];
            } else {
                // if there isnt key match with this key add value null to this key 
              value2 = null;
            }
            // push for each key in lfirst hash table 2 values 
            finalResult.push([leftKey,leftvalue1,value2]);
          }
        }
        // now return the final result array 
        return finalResult;
      };
    

    
}
const hashTable = new HashTable(60);
// Insert data to the hash table
hashTable.add("test", "Data structures algorithms");
hashTable.add("course1", "Data analytics");
hashTable.add("course2", "Cyber security");
hashTable.add("course3", "Business Intelligence");
hashTable.add("course4", "S/W Development");


console.log(hashTable);

// Search data from the hash table 
hashTable.get("bk101");
console.log('from get method', hashTable.get("sets"));

module.exports = HashTable;