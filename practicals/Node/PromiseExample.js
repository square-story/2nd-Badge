const p1 = () => new Promise((res, rej) => setTimeout(() => {
    res('success')
}, 3000))


p1().then((data) => console.log(data))