"use strict";
function add(a, b) {
    return a + b;
}
exports.add = add;
function sub(a, b) {
    return a - b;
}
exports.sub = sub;
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
exports.div = div;
var MathLib = (function () {
    function MathLib() {
    }
    return MathLib;
}());
exports.MathLib = MathLib;
exports.DEBUG = 'D';
