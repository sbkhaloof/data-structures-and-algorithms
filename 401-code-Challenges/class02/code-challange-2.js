'use strict'
function insertShiftArray(arr, item) {
    let newArr = [];
    let arrLen = arr.length;
    let index;
    if (arrLen % 2 == 0) { index = arrLen / 2 }
    else { index = parseInt(arrLen / 2) + 1 }

    arr.forEach((ele, idx) => {
        if (idx !== index)
            newArr.push(ele)
        else {
            newArr.push(item);
            newArr.push(ele)
        }
    })
    return newArr
}
let result = insertShiftArray([2, 4, 6, -8], 5)
console.log(result);
let result2 = insertShiftArray([42, 8, 15, 23, 42], 16)
console.log(result2);