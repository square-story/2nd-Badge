let arr = [2, 5, 3, 2, 5, 3]

const bubbleSort = (arr) => {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                swapped = true
            }
        }
    } while (swapped);
    return arr
}

console.log('bubbleSort:', bubbleSort(arr))


const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let index = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[index]) {
                index = j
            }
        }
        if (i !== index) {
            [arr[i], arr[index]] = [arr[index], arr[i]]
        }
    }
    return arr
}

console.log('SelectionSort:', selectionSort(arr))


const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let value = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > value) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = value
    }
    return arr
}

console.log('insertionSort:', insertionSort(arr))

const quickSort = (arr) => {
    if (arr.length < 2) return arr
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log('quickSort:', quickSort(arr))


const mergeSort = (arr) => {
    if (arr.length < 2) return arr
    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [...arr, ...left, ...right]
}

console.log('mergeSort:', mergeSort(arr))