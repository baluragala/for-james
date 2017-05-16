function calculateDiscount(price:number,dicountValue:number=.1, priviliged?:boolean) : number {
    return price * dicountValue;
}

//optional args

let discount:number;
discount = calculateDiscount(256);

//arrow functions

let numbers:number[]=[1,2,3,4,5,6,7,8,9,10];

let evenNumbers:Array<number> = numbers.filter(function(n){
    return n%2==0
})

let evenNumbers1:Array<number> = numbers.filter((n) => n%2==0)

function calculateTotalPrice(price:number, discount:number) : number {
    let discountedPrice = price * discount;
    let totalPrice = price - discountedPrice;
    return totalPrice;
}

let calculateTotalPrice1 = (price:number, discount:number) => {
    let discountedPrice = price * discount;
    let totalPrice = price - discountedPrice;
    return totalPrice;
}


console.log(evenNumbers);
console.log(evenNumbers1);
