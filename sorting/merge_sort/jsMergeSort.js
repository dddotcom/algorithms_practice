function mergeSort(arr){
  //base case
  if(arr.length <= 1){
    return arr;
  }

  //divide in half
  var middleIndex = Math.floor(arr.length/2);
  var leftArray = arr.slice(0, middleIndex);
  var rightArray = arr.slice(middleIndex, arr.length);

  //merge
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArr, rightArr){
  var mergedArr = [];
  //compare 0 indices, push the lesser value, slice it out!
  while(leftArr.length > 0 && rightArr.length > 0){
    if(leftArr[0] < rightArr[0]){
      mergedArr.push(leftArr.shift());
    } else {
      mergedArr.push(rightArr.shift());
    }
  }
  return mergedArr.concat(leftArr, rightArr);
  // return mergedArr;
}



console.log(mergeSort([5,2,8,1,7,6,4,3,9]))
console.log(mergeSort([14, 7, 3, 12]))
console.log(mergeSort([5, 8, 2, 5, 3, 5, 1, 7, 8, 5, 6, 5, 1]))
console.log(mergeSort([1]))
