console.log('Hi, Alan.');

// 1 Kata
// add
console.log("add++++++++++++");

function add(a,b) {
    return  a+b
}

let sum = add(2,4)
console.log(sum);

// 2 Kata
// Multiply
console.log("multiply++++++++++++++");

function multiply(a,b) {
    let index = 0
    let answer = 0
    while (index < b) {
        answer=add(a, answer)
        index= index+1
    }
    return answer
}

let times = multiply(6,4)
console.log(times);

// 3 Kata
// Power/Exponentiation
console.log("Power+++++++++++++++++");

function power(x,n) {
    let index = 0
    let answer = 1
    while (index < n) {
        answer = multiply (x, answer)
        index = index+1
    }
    return answer
}

let exponent = power(2,8)
console.log(exponent);

// 4 Kata
// Factorial
console.log("Factorial+++++++++++++++");

function factorial(x) {
    let index = 1
    let answer = 1
    while (index<=x) {
        answer= multiply(index, answer)
        index=index+1
    }
    return answer
}

let factor = factorial (4)
console.log(factor);


// 5 Kata
// Fibonacci
console.log("Fibonacci+++++++++++++++");

function fibonacci(n) {
    let index = 3
    let answer = 1
    let a = 0
    let b = 1
    while (index<=n) {
        answer= add(a,b)
        a=b
        b=answer
        index=index+1
    }
    return answer
}

let leo= fibonacci(4)
console.log(leo);