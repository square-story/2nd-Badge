function some() {
    let great = true;
    function greatPrint() {
        console.log(great);
    }
    return greatPrint;
}

let greatPrint = some();

greatPrint(); // Output: true