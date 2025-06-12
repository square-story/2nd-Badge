const array = [1,4,6,2,4,623,3,2,566,23]

const bubbleSort = (array)=>{
    let swapped
    do {
        swapped = false
        for(let i=0;i<array.length-1;i++){
            if(array[i]>array[i+1]){
                [array[i],array[i+1]] = [array[i+1],array[i]]
                swapped = true
            }
        }
    } while (swapped);

    return array
}

console.log(bubbleSort(array))

const selectionSort = (array)=>{
    for (let i = 0; i < array.length-1; i++) {
        let minIndex = i;
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[minIndex]){
                minIndex = j
            }
        }
        if(minIndex!==i){
            [array[minIndex],array[i]] = [array[i],array[minIndex]]
        }
        
    }

    return array
}

console.log(selectionSort(array))

const insertionSort = (array) =>{
    for(let i=1;i<array.length;i++){
        let key = array[i]
        let j = i-1
        while(j>=0 && key<array[j]){
            array[j+1] = array[j]
            j--
        }
        array[j+1] = key
    }
    return array
}

console.log(insertionSort(array))