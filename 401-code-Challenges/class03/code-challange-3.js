'use strict'
function BinarySearch(arr,key){
    for (let i=0;i<arr.length;i++)
    if(arr[i]==key){return i;}
     {return -1;}
}
let result=BinarySearch([-131, -82, 0, 27, 42, 68, 179], 42);
console.log(result);



describe('Test challenge 03' , ()=>{
    test ('return the index of the array’s element that is equal to the value of the search key ', ()=>{
        expect(BinarySearch([2,4,6,-8], 6 )).toStrictEqual(2);
        expect(BinarySearch([42,8,15,23,42], 16 )).toStrictEqual(-1);
    })
})