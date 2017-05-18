/*

class Course {
    title:string;
    desc:string;
    fee:number;
}

*/

interface Course {
    title:string;
    desc:string;
    fee:number;
    printDetails?: ()=>void;
    getTitle?: (upperCase:boolean)=>string;
}

let angular:Course = { 
    title:'Angular',
    desc:'Front end framework',
    fee:1000
}

console.log(angular);
angular.title = 'Angular2';
console.log(angular);


// function Types

let printFunction = () => "I am printing";

interface searchFunc {
    (searchTerm:string) : string;
}

let mySearchFunc:searchFunc;

mySearchFunc = (q:string)=>"your results";


interface CDPlayer{
    start : () => boolean;
    stop : () => boolean;
    pause : () => boolean;
}

class SonyCDPlayer implements CDPlayer {

    start(){
        console.log('Started');
        return true;
    };

    stop(){
        console.log('stop');
        return true;
    }
    pause(){
        console.log('pause');
        return true;
    }


}

let player = new SonyCDPlayer();
console.log(player.start())


interface Product {
    getProductDetails : () => Object
}

interface Cart extends Product {
    getCartDetails : () => Object
}

interface CartAndProduct extends Cart {

}

class MyCart implements CartAndProduct {
    getCartDetails() {
        return {}
    }
    getProductDetails() {
        return {}
    }

}








