
class Course {
    // private title:string;
    // private desc:string;
    // private fee:number;

    constructor(protected title:string, protected desc:string, protected fee:number){
        this.title = title;
        this.desc = desc;
        this.fee = fee;
    }

    get Fee(){
        return this.fee;
    }

    set Fee(value:number){
        if(value <= 0)
             throw new Error('Fee cannot be 0 or less than')
        this.fee = value;
    }

    print(){
        console.log(this);
        return "PRINT EXECUTED"
    }
}

class SpeicalCourse extends Course {
    
    constructor(protected title:string, protected desc:string, protected fee:number, private splDesc:string) {
        super(title,desc,fee);
        this.splDesc = splDesc;
    }

    print(){
        console.log(this);
        return "PRINT EXECUTED"
    }
}

let angular = new SpeicalCourse('angular','by google',1000,'it is on offer');
console.log(angular.print())