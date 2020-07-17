let string = 'Hello I am Nabed    Khan. I am    from chittagong';
// let length = string.split(' ').length;
// console.log(length);
let word = 0;
for (let i = 0; i < string.length; i++) {
    if (string[i] == ' ' && string[i - 1] != ' ') {
        word++;
    }
}
word++;
console.log(word);
