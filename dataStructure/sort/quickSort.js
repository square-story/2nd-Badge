const quickSort = (arr)=>{
    if(arr.length<2) return arr
    const pivot = arr[arr.length-1]
    const left=[]
    const right = []
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

const arr = [1,2,4,2,1]

console.log(quickSort(arr))