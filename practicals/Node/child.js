process.on('message', (message) => {
    console.log('parent message received', message)
})
process.send('parent responsed')
