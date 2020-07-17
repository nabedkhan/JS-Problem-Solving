let string = 'Hello I am Nabed Khan. I am from chittagong';
let result = string.split('').reverse().join('');
console.log(result);

let reverse = '';
for (let i = 0; i < string.length; i++) {
    reverse = string[i] + reverse;   // 'olleh'
}
console.log(reverse);