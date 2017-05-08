def merge_sort(arr)
  if arr.length <= 1
    return arr
  end

  middleIndex = (arr.length/2).floor
  leftArr = arr[0...middleIndex]
  rightArr = arr[middleIndex...arr.length]
  return merge(merge_sort(leftArr), merge_sort(rightArr))
end

def merge(leftArr, rightArr)
  mergedArr = []
  while leftArr.length > 0 && rightArr.length > 0 do
    if leftArr[0] < rightArr[0]
      mergedArr.push(leftArr.shift)
    else
      mergedArr.push(rightArr.shift)
    end
  end
  return mergedArr + leftArr + rightArr
end

puts merge_sort([5,2,8,1,7,6,4,3,9]).inspect
puts merge_sort([14, 7, 3, 12]).inspect
puts merge_sort([5, 8, 2, 5, 3, 5, 1, 7, 8, 5, 6, 5, 1]).inspect
puts merge_sort([1]).inspect
