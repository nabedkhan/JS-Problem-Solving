let list = [];

// Example-1
function addItem(arr, item) {
    if (arr.indexOf(item) == -1) {
        arr.push(item.trim());
        console.log(arr);
    }
    else {
        console.log('Item is exists in the array');
    }
}
// // Example-2 with function
// function addItem(arr, item) {
//     if (checkitem(arr, item)) {
//         arr.push(item);
//         console.log(arr);
//     } else {
//         console.log('Item is exists in the array');
//     }
// }
// function checkitem(arr, i) {
//     let exists = false;
//     if (arr.indexOf(i) != -1) {
//         exists = false;
//     } else {
//         exists = true;
//     }
//     return exists;
// }

addItem(list, 'Hello World');
addItem(list, 'Javascript');
addItem(list, 'Python');
addItem(list, '    Perl    ');
addItem(list, 'Python');