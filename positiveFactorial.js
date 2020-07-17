// function factorial(z) {
//     let result = 1;
//     for (let i = 0; i <= z; i++) {
//         if (i > 0) {
//             result *= i;
//         }
//     }
//     return result;
// }
// console.log(factorial(0));


// Recursion 
function factorial(n) {
    let result = 1;
    if (n === 0) {
        return result;
    }
    else {
        result = n * factorial(n - 1);
    }
    return result;
}
console.log(factorial(5));



function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    }
    return 1;
}
console.log(factorial(3));