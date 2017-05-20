import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-courses',
  templateUrl: './select-courses.component.html',
  styleUrls: ['./select-courses.component.css']
})
export class SelectCoursesComponent implements OnInit {

  courses=['Course1','Course2','Course3','Course4']
  selectedCourses;

  @Output() courseSelectedEvent:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  courseSelected(course){
    this.courseSelectedEvent.emit(course);
  }

}
