function* gen(value) {
    while (true) {
        yield value++
        if (value > 10) {
            return
        }
    }
}

const sometime = gen(1)

const timer = setInterval(() => {
    const nextValue = sometime.next()
    if (nextValue.done) {
        clearInterval(timer)
        console.log('the timer exit with successfully print')
    } else {
        console.log(nextValue.value)
    }
}, 1000);