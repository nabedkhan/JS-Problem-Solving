let number = 79;
for (let i = 2; i < number - 1; i++) {
    if (number % i == 0) {
        console.log(number + ' Not a Prime Number');
        break;
    } else {
        console.log(number + ' a Prime Number');
        break;
    }
}
