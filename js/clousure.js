function closure() {
    console.log('some')
    const heh = 'somoooty'
    function some() {
        function someInnner() {
            console.log('hehehhe', heh)
        }
        someInnner()
    }
    return some()
}

closure()




