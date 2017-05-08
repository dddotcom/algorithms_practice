function radixSort(arr, maxDigits){
  var buckets = makeBuckets();
  var divisor = 1;
  for(var i = 0; i < maxDigits; i++){
    for(var j = 0; j < arr.length; j++){
      var digit = Math.floor(arr[j]/divisor)%10;
      buckets[digit].push(arr[j]);
    }
    arr = flattenBuckets(buckets);
    buckets = makeBuckets();
    divisor *= 10;
  }
  return arr;
}

function makeBuckets(){
  var buckets = {};
  for(var i = 0; i < 10; i++){
    buckets[i] = [];
  }
  return buckets;
}

function flattenBuckets(buckets){
  var arr = [];
  for(var key in buckets){
    for(var i = 0; i < buckets[key].length; i++){
      arr.push(buckets[key][i]);
    }
  }
  return arr;
}

console.log(radixSort([7,14,3,12, 354,1,1,44,5,2,1,5,61,19], 3))
