let arr = [35,56,3,5,3,5,36,7]

const findSecondLargestAndLeast= (arr)=>{
    return arr.reduce((arr,curr)=>{
        if(arr[0].largest<curr){
            arr[0].secondLargest = arr[0].largest
            arr[0].largest = curr
        }else if(arr[0].secondLargest<curr && arr[0].largest!==curr){
            arr[0].secondLargest = curr
        }
        if(arr[1].least>curr){
            arr[1].secondLeast = arr[1].least
            arr[1].least = curr
        }else if(arr[1].secondLeast>curr && arr[1].least!==curr){
            arr[1].secondLeast = curr
        }
        return arr
    },[{largest:-Infinity,secondLargest:-Infinity},{least:Infinity,secondLeast:Infinity}])
    
}
console.log(findSecondLargestAndLeast(arr))

