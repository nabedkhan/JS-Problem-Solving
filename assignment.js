// feetToMile
function feetToMile(num) {
    var convert = 0;
    if (num > 0) {
        convert = num * 0.000189394;
    } else {
        return 0;
    }
    return convert.toFixed(3);
}
console.log(feetToMile(13444));

// woodCalculator
function woodCalculator(chair, table, bed) {
    var woodForChair = chair * 1;
    var woodForTable = table * 3;
    var woodForBed = bed * 5;
    return totalWood = woodForChair + woodForTable + woodForBed;
}
console.log(woodCalculator(6, 1, 3));

// brickCalculator
function brickCalculator(num) {
    var totalFeet = 0;
    if (num <= 10) {
        totalFeet = num * (15 * 1000);
    } else if (num > 10 && num <= 20) {
        var firstTenFeet = 10 * (15 * 1000);
        var lastTenFeet = (num - 10) * (12 * 1000);
        totalFeet = firstTenFeet + lastTenFeet;

    } else {
        var firstTenFeet = 10 * (15 * 1000);
        var tenToTwenty = 10 * (12 * 1000);
        var upperTwenty = (num - 20) * (10 * 1000);
        totalFeet = firstTenFeet + tenToTwenty + upperTwenty;
    }
    return totalFeet;
}
console.log(brickCalculator(17));

// tinyFriend
function tinyFriend(arr) {
    var result = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length < result.length) {
            result = arr[i];
        }
    }
    return result;
}
var list = ['Nabed', 'Shivam', 'Akib', 'Jalalabad', 'Mominur', 'aa', 'a'];
console.log(tinyFriend(list));