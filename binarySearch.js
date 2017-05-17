function binarySearch(arr, target){
  let min = 0;
  let max = arr.length-1;
  let guess = Math.floor((min+max)/2);
  let count = 0;

  while(min <= max){
    count++;
    if(arr[guess] === target){
      return guess;
    }
    else if(arr[guess] < target){
      min = guess + 1;
    } else {
      max = guess - 1;
    }
    guess = Math.floor((min+max)/2);
  }

  console.log("Number of guesses:", guess);
  return target === arr[min] ? min : -1;
}

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
console.log(binarySearch(primes, 15));
console.log(binarySearch([7, 10, 20, 30, 40, 50, 60], 15));
console.log(binarySearch([7, 10, 20, 30, 40, 50, 60], 10));
console.log(binarySearch([7, 10, 20, 30, 40, 50, 60], 50));
