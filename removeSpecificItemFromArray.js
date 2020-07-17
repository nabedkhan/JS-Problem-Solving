// let list = ['Python', 'Javascript', 'Php', 'Ruby', 'C++'];

// function removeItem(arr, item) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === item) {
//             arr.splice(i, 1)
//             console.log(arr);
//         }
//     }
// }

// removeItem(list, 'Php');


// // Leap Year Checker
// function leapYear(years) {
//     let result;
//     if (years % 4 == 0 && years % 100 != 0 || years % 400 == 0) result = true
//     else result = false
//     return result
// }
// console.log(leapYear(3200));



// function count(number) {
//     console.log(number);
//     let nextNumber = number - 1;
//     if (nextNumber > 0) {
//         count(nextNumber);
//     }
// }
// count(5);


let total;
for (let i = 1; i < 20; i++) {
    if (i % 2 == 0) {
        total = i * 2;
    } else {
        total = i;
    }
    console.log(total);
}