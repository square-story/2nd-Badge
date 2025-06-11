async function featchData (){
    try {
        let response = await fetch("https://api.example.com/data")

        if(!response.ok){
            throw new Error('hehe that wrong buddy, the status is now',response.status)
        }
        let data = await response.json()
        console.log('data recived',data)
    } catch (error) {
        console.error('the error is :',error.message)
    }finally{
        console.log('i will work every time the function called')
    }
}



featchData()