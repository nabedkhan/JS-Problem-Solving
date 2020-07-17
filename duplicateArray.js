let arr = [1, 4, 5, 2, 3, 4, 6, 2, 1, 1, 2, 3, 5, 2, 6];

function newArray(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) == -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
console.log(newArray(arr));