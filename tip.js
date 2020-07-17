// function tipCalculate(amount, tip) {
//     let percent = tip / 100;
//     let tipAmount = amount * percent;
//     let totalAmount = amount + tipAmount;

//     if (tip < 10) {
//         console.log(tip + ' is very low you can give better tip ' + percent);
//         console.log(tipAmount + ' you left');
//         console.log(totalAmount + ' total price');
//     } if (tip > 10) {
//         console.log(percent);
//         console.log(tipAmount + ' you left');
//         console.log(totalAmount + ' total price');
//     }
// }
// tipCalculate(100, 5);
// tipCalculate(222, 30);
// tipCalculate(440, 20)


let name = 'Nabed Khan';
console.log(name.charAt(1)); //use for single character
console.log(name.startsWith('Nabed')); //start character
console.log(name.endsWith('Khan')); //end character
console.log(name.slice(5)); //end character