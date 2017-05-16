/*

primituve
--------
string
boolean
number
undefined
null
symbol

ts
---
Enum
Void
Array


refrence
-------
Object

 */
//type annonation
var username = 'John';
var weight = 150;
var married = true;
var membershipEnum;
(function (membershipEnum) {
    membershipEnum[membershipEnum["FREE"] = 0] = "FREE";
    membershipEnum[membershipEnum["BASIC"] = 1] = "BASIC";
    membershipEnum[membershipEnum["PREMIUM"] = 2] = "PREMIUM";
})(membershipEnum || (membershipEnum = {}));
var membershipEnum1;
(function (membershipEnum1) {
    membershipEnum1[membershipEnum1["FREE"] = 1000] = "FREE";
    membershipEnum1[membershipEnum1["BASIC"] = 1001] = "BASIC";
    membershipEnum1[membershipEnum1["PREMIUM"] = 1002] = "PREMIUM";
})(membershipEnum1 || (membershipEnum1 = {}));
var membershipEnum2;
(function (membershipEnum2) {
    membershipEnum2[membershipEnum2["FREE"] = 1000] = "FREE";
    membershipEnum2[membershipEnum2["BASIC"] = 2000] = "BASIC";
    membershipEnum2[membershipEnum2["PREMIUM"] = 3000] = "PREMIUM";
})(membershipEnum2 || (membershipEnum2 = {}));
var userMembership = membershipEnum1.BASIC;
console.log(userMembership);
