// Factorial of a Number 1*2*3*4*5.....
function factorial(number) {
    let sum = 1;
    // for (let i = 1; i <= number; i++) {
    //     sum *= i;
    // }

    let i = 1;
    while (i <= number) {
        sum *= i;
        i++;
    }
    return sum;
}
console.log(factorial(5));

// Recursive Function
function fact(n) {
    let result = 1;
    if (n === 0) {
        return result;
    } else {
        result = n * fact(n - 1);  ///  5 * 4! 
    }
    return result;
}
console.log(fact(5));