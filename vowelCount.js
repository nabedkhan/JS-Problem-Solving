function countVowels(str) {
    let count = '';
    let string = str.split('');
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count += char;
        }
    }
    return count.length;
}
console.log(countVowels('Nabed'));