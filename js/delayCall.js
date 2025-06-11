const p1 = Promise.resolve('resolve the p1')

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const some = async () => {
    try {
        await delay(2000)
        const some1 = await p1
        console.log(some1)
    } catch (error) {
        console.error(error)
    }
}


some()
