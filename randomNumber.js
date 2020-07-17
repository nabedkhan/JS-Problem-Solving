function point(number) {
    let result = 0;
    for (let i = 0; i <= number; i++) {
        let random = Math.random() * number;
        result = Math.round(random);
        if (result == 1) {
            console.log('You got the 1');
            break;
        } else {
            console.log(result);
        }
    }
}
point(6);