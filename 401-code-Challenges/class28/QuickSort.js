'use strict'

function quickSort(arr,left = 0, right = arr.length - 1) {
    let index;
    if (arr.length > 1) {
      index = partition(arr, left, right);
      if (left < index - 1) {
        quickSort(arr, left, index - 1);
      }
      if (index < right) {
        quickSort(arr, index, right);
      }
    }
    return arr;
  }
  

function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}


var items = [5,3,7,6,2,9];
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]
module.exports=quickSort;