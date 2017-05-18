/*

class Course {
    title:string;
    desc:string;
    fee:number;
}

*/
var angular = {
    title: 'Angular',
    desc: 'Front end framework',
    fee: 1000
};
console.log(angular);
angular.title = 'Angular2';
console.log(angular);
// function Types
var printFunction = function () { return "I am printing"; };
var mySearchFunc;
mySearchFunc = function (q) { return "your results"; };
var SonyCDPlayer = (function () {
    function SonyCDPlayer() {
    }
    SonyCDPlayer.prototype.start = function () {
        console.log('Started');
        return true;
    };
    ;
    SonyCDPlayer.prototype.stop = function () {
        console.log('stop');
        return true;
    };
    SonyCDPlayer.prototype.pause = function () {
        console.log('pause');
        return true;
    };
    return SonyCDPlayer;
}());
var player = new SonyCDPlayer();
console.log(player.start());
