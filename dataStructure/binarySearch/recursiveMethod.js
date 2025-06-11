function binarySearch(arr, target, left, right) {
    if (left > right) return -1
    let middle = Math.floor((left + right) / 2)
    if (arr[middle] == target) return middle
    if (arr[middle] > target) return binarySearch(arr, target, left, middle - 1)
    else return binarySearch(arr, target, middle + 1, right)
}

let arr = [21, 34, 34, 34, 45, 5434, 5, 3, 54].sort((a, b) => a - b)
console.log(binarySearch(arr, 5434, 0, arr.length - 1))