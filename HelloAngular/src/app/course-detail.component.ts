import { Component,Input,EventEmitter,Output } from "@angular/core"


@Component({
    selector:'app-course-detail',
    templateUrl:'./course-detail.component.html',
    styleUrls:['./course-detail.component.css']
})
export class CourseDetailComponent{
    @Input()
    courseTitle:string='Angular 2';
    @Input()
    courseDesc:string='This a framework from google'
    @Input() isPaid:boolean;

    @Input() price:number;

    @Input() course
    
    style;
    currentClass;
    
    @Output('courseClicked')
    courseClickedEventEmitter:EventEmitter<string> = new EventEmitter();
    
    OnClick(){
        this.courseClickedEventEmitter.emit(`child says : ${this.courseTitle}`);
    }

    ngOnChanges(){
        this.currentClass = this.isPaid == true ? ['premium','bold'] : ['free','bold'];
        this.style = this.isPaid == true ? {'border':'1px solid orangered'} : {'border':'1px solid blue'}
    }

    ngDoCheck(){
        console.log(this.course);
    }
}

