


const featchUser = ()=>{
    return new Promise((res,rej)=>{
        const value = -1;
        if(value>0){
            res('yes')
        }else{
            rej('no')
        }
    })
}


featchUser().then((res)=>console.log(res)).catch(err=>console.log(err))