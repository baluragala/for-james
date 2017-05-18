import { Component,Input,EventEmitter,Output } from "@angular/core"


@Component({
    selector:'app-course-detail',
    templateUrl:'./course-detail.component.html'
})
export class CourseDetailComponent{
    @Input()
    courseTitle:string='Angular 2';
    @Input()
    courseDesc:string='This a framework from google'

    @Output('courseClicked')
    courseClickedEventEmitter:EventEmitter<string> = new EventEmitter();
    
    OnClick(){
        this.courseClickedEventEmitter.emit(`child says : ${this.courseTitle}`);
    }
}