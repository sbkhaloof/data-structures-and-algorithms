'use strict'

const HashTable=require("../hashTable");

describe("join left test",()=>{

    let left = new HashTable(20);
    let right = new HashTable(20);
    
    left.add('fond','enamored');
    left.add('wrath','anger');
    left.add('diligent','employed');
    left.add('outift','garb');
    left.add('guide','usher');
    
    
    right.add('fond','averse');
    right.add('wrath','delight');
    right.add('diligent','idle');
    right.add('guide', 'follow');
    right.add('flow', 'jam');
    

    it('return the correct left join data',()=>{

        let expexted = [
            ["fond", "enamored", "averse"],
            ["warth", "anger", "delight"],
            ["diligent", "employed", "idle"],
            ["outfit", "garb", "NULL"],
            ["guide", "usher", "follow"],
          ];
         let newHashTable=new HashTable(200)
       
        expect(newHashTable.leftJoin(left, right)).toEqual(expexted);
    })
})