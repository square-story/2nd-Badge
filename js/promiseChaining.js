const promise1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('promise1 resolve after 4000 second')
        }, 4000);
    })
}

const promise2 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej('promise2 rejected after 5000 second')
        }, 5000);
    })
}

const promise3 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('promise3 resolved after 6000 second')
        }, 6000);
    })
}


promise1()
    .then((value) => {
        console.log(value)
        return promise2()
    })
    .then((value) => {
        console.log(value)
        return promise3()
    }).then((value) => {
        console.log(value)
    }).catch((err) => console.error(err))
    .finally(() => {
        console.log('yess completed')
    })