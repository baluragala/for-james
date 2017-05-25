import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-course-additional-details',
  templateUrl: './course-additional-details.component.html',
  styles: []
})
export class CourseAdditionalDetailsComponent implements OnInit {

  currentCourseId;
  queryParams;

  constructor(private activatedRoute:ActivatedRoute) { 
  
  }

  ngOnInit() {
  }

  ngDoCheck(){
    console.log(this.activatedRoute.snapshot);
    this.currentCourseId = this.activatedRoute.snapshot.params['courseId'];
    this.queryParams = this.activatedRoute.snapshot.queryParams;
  }

}
