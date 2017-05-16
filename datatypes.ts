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
let username:string='John';
let weight:number=150;
let married:boolean=true;


enum membershipEnum { FREE, BASIC, PREMIUM }
enum membershipEnum1 { FREE=1000, BASIC, PREMIUM }
enum membershipEnum2 { FREE=1000, BASIC=2000, PREMIUM=3000 }

let userMembership:membershipEnum1 = membershipEnum1.BASIC;

console.log(userMembership);

let courses:string[] = ['Java','JS','Angular'];
let courses1:Array<string> = ['Java','JS','Angular'];

let authorName:number=100;
