function highestDigit(number) {
    let result = number.toString().split('');
    let num = Math.max(...result);
    return parseInt(num);
}
console.log(highestDigit(784));