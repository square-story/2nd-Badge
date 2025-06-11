process.on('message', (message) => {
    console.log('message from parent:', message)
    if (message.task === 'calculate') {
        const result = factorial(message.number)
        process.send({ result })
    }
})

const factorial = (number) => {
    if (number <= 1) return 1
    return number * factorial(number - 1)
}