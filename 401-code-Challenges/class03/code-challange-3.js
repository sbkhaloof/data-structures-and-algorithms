'use strict'
const binarySearch=(sortedArr,key)=>{
    
    let start = 0;
    let end = sortedArr.length-1;
    
    while (start <= end) {
        let mid = Math.ceil((start + end) / 2);
        if (sortedArr[mid] === key) {
            return mid;
        } else if (sortedArr[mid] < key) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}
let array = [1,2,3,4,5];
let key = 4
console.log(`The index of ${key} is ${binarySearch(array,key)}`)





describe('Test challenge 03' , ()=>{
    test ('return the index of the array’s element that is equal to the value of the search key ', ()=>{
        expect(BinarySearch([2,4,6,-8], 6 )).toStrictEqual(2);
        expect(BinarySearch([42,8,15,23,42], 16 )).toStrictEqual(-1);
    })
})