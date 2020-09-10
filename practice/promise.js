function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

sleep(1000).then(() => {
    console.log('one')
})

sleep(2000).then(() => {
    console.log('two')
})

sleep(3000).then(() => {
    console.log('done')
})
