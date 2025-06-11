let arr = [32,3,2,3,45,2,1212,3]
function bubbleSort(arr){
    let swapped;
    do{
        swapped = false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
                swapped = true
            }
        }
    }while(swapped)
    return arr
}


console.log(bubbleSort(arr))