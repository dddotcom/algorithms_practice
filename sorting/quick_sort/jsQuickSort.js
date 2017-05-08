function quickSort(arr){
  if(arr.length <= 1){
    return arr;
  }

  //pick the pivot
  var pivot = arr.shift();
  var leftArr = [];
  var rightArr = [];

  //partition into two arrays
  while(arr.length > 0 ){
    var temp = arr.shift();
    if(temp <= pivot){
      leftArr.push(temp);
    } else {
      rightArr.push(temp);
    }
  }
  
  //merge them back together
  return quickSort(leftArr).concat(pivot).concat(quickSort(rightArr));
}

console.log(quickSort([7,14,3,12]))
console.log(quickSort([5,2,8,1,7,6,4,3,9]))
console.log(quickSort([14, 7, 3, 12]))
console.log(quickSort([5, 8, 2, 5, 3, 5, 1, 7, 8, 5, 6, 5, 1]))
console.log(quickSort([1]))
