const p1 = Promise.resolve('p1 resolve')
const p2 = Promise.resolve('p2 resolve')
const p3 = Promise.reject('p3 rejected')


Promise.race([p1, p2, p3])
    .then((value) => console.log(value))
    .catch((err) => console.error(err))