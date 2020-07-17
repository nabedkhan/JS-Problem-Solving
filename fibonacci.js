//fibonacci series 1+2+3+5+8
function fibonacci(number) {
    let sum = [0, 1];
    for (let i = 2; i <= number; i++) {
        sum[i] = sum[i - 1] + sum[i - 2];
    }
    return sum;
}
console.log(fibonacci(10));

// recursive way
function fiboRecursive(number) {
    if (number === 0) {
        return 0;
    } else if (number === 1) {
        return 1;
    }
    else {
        return fiboRecursive(number - 1) + fiboRecursive(number - 2);
    }
}
console.log(fiboRecursive(10));