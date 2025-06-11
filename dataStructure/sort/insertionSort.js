let arr = [1,2,4,2,1]

const insertionSort = (arr)=>{
    for(let i=1;i<arr.length;i++){
        let sortNumber = arr[i]
        let j = i-1
        while(j>=0 && sortNumber<arr[j]){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = sortNumber
    }
    return arr
}

console.log(insertionSort(arr))