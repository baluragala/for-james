var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Course = (function () {
    // private title:string;
    // private desc:string;
    // private fee:number;
    function Course(title, desc, fee) {
        this.title = title;
        this.desc = desc;
        this.fee = fee;
        this.title = title;
        this.desc = desc;
        this.fee = fee;
    }
    Object.defineProperty(Course.prototype, "Fee", {
        get: function () {
            return this.fee;
        },
        set: function (value) {
            if (value <= 0)
                throw new Error('Fee cannot be 0 or less than');
            this.fee = value;
        },
        enumerable: true,
        configurable: true
    });
    Course.prototype.print = function () {
        console.log(this);
        return "PRINT EXECUTED";
    };
    return Course;
}());
var SpeicalCourse = (function (_super) {
    __extends(SpeicalCourse, _super);
    function SpeicalCourse(title, desc, fee, splDesc) {
        var _this = _super.call(this, title, desc, fee) || this;
        _this.title = title;
        _this.desc = desc;
        _this.fee = fee;
        _this.splDesc = splDesc;
        _this.splDesc = splDesc;
        return _this;
    }
    SpeicalCourse.prototype.print = function () {
        console.log(this);
        return "PRINT EXECUTED";
    };
    return SpeicalCourse;
}(Course));
var angular = new SpeicalCourse('angular', 'by google', 1000, 'it is on offer');
console.log(angular.print());
