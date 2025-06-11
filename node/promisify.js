const util = require('util')

const somePromise = util.promisify(some)
function some(params, callback) {
    setTimeout(() => {
        if (params) {
            callback(null, 'the params is getted', params)
        } else {
            callback(new Error('error featch the params'), null)
        }
    }, 1000);
}


(async () => {
    try {
        const data = await somePromise('some');
        console.log('the data from:', data)
    } catch (error) {
        console.log('the error', error)
    }
})()
