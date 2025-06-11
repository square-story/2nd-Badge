//Write a recursive function to calculate the factorial of a number.

function Factoral(n) {
    return n == 1 ? n : Factoral(n - 1) * n
}

console.log(Factoral(5))