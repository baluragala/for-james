var username = 'Zeolearn';
var username = 'John';
var x = 10;
function getRandomNumber(flag) {
    var x;
    if (flag) {
        x = Math.random();
    }
    return x;
}
var x1 = 10;
function getRandomNumber1(flag) {
    if (flag) {
        var x1_1 = Math.random();
    }
    return x1;
}
console.log(getRandomNumber(false));
console.log(getRandomNumber1(false));
