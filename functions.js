function calculateDiscount(price, dicountValue, priviliged) {
    if (dicountValue === void 0) { dicountValue = .1; }
    return price * dicountValue;
}
//optional args
var discount;
discount = calculateDiscount(256);
//arrow functions
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = numbers.filter(function (n) {
    return n % 2 == 0;
});
var evenNumbers1 = numbers.filter(function (n) { return n % 2 == 0; });
function calculateTotalPrice(price, discount) {
    var discountedPrice = price * discount;
    var totalPrice = price - discountedPrice;
    return totalPrice;
}
var calculateTotalPrice1 = function (price, discount) {
    var discountedPrice = price * discount;
    var totalPrice = price - discountedPrice;
    return totalPrice;
};
console.log(evenNumbers);
console.log(evenNumbers1);
