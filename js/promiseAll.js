const p1 = Promise.resolve('p1 resolve')
const p2 = Promise.resolve('p2 resolve')
const p3 = new Promise((res, rej) => {
    let result = false
    if (result) {
        setTimeout(() => {
            res('yess')
        }, 4000);
    } else {
        rej('no')
    }
})


Promise.all([p1, p2, p3])
    .then((value) => console.log(value))
    .catch((err) => console.log(err))