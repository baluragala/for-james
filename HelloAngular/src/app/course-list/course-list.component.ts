import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courseTitle1:string='Course Title 1';
  courseTitle2:string='Course Title 2'
  courseTitle3:string='Course Title 3'
  courseTitle4:string='Course Title 4'

  constructor() { }

  ngOnInit() {
  }

  CourseClicked(eventData){
    console.log(eventData);
  }
}
