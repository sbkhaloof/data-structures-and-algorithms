'use strict'
const HashTable = require('../hashTable')
describe('this is hash table', () => {
    it('should test Adding a key/value to your hashtable', () => {
        let hashTable = new HashTable(4);
        let expected = 'dataStrcture';
        hashTable.add('lecture', 'dataStrcture');

        expect(hashTable.contains('lecture')).toBe(true);
        expect(hashTable.get('lecture')).toEqual(expected);
    });
    it('should test get method (Retrieving based on a key returns the value stored)', () => {
        let hashTable = new HashTable(4);
        let expected = 'dataStrcture';
        hashTable.add('lecture', 'dataStrcture');

        expect(hashTable.contains('lecture')).toBe(true);
        expect(hashTable.get('lecture')).toEqual(expected);
        expect(hashTable.get('lect')).toEqual(null);

    });
    it('should test contains method(Successfully returns null for a key that does not exist in the hashtable)', () => {
        let hashTable = new HashTable(4);
        let expected = 'dataStrcture';
        hashTable.add('lecture', 'dataStrcture');

        expect(hashTable.get('lecture')).toEqual(expected);
        expect(hashTable.get('lect')).toEqual(null);
    });
    it('should Successfully handle a collision within the hashtable',()=>{
        let hashTable = new HashTable(4);
        hashTable.add('test', 'matematics');
        hashTable.add('sets','grade')


        expect(hashTable.contains('test')).toBe(true);
        expect(hashTable.contains('sets')).toBe(true);
    });
    it('should Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
        let hashTable = new HashTable(4);
        hashTable.add('test', 'matematics');
        hashTable.add('sets','grade')
    });
    it('should Successfully hash a key to an in-range value ',()=>{
        let hashtable = new HashTable(10);
    let min=0;
    let max=9;
    let key='name';

    expect(hashtable.hash(key)).toBeGreaterThanOrEqual(min);
    expect(hashtable.hash(key)).toBeLessThanOrEqual(max);
    })
})