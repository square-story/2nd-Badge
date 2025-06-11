//Write a recursive function to find the nth Fibonacci number.

function Fibonacci(n) {
    return n <= 1 ? n : Fibonacci(n - 1) + Fibonacci(n - 2)
}

console.log(Fibonacci(6))