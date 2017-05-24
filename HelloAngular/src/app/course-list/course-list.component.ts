import { Component, OnInit,Inject } from '@angular/core';
import { CourseService } from '../course.service'

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

  coursesFilter:string;

  course = {
    title:'angular',
    desc:'by google',
    isPaid:false,
    price:0
  }

  courses;
  //private courseService:CourseService

  favoriteCourse:string = 'Intial Value';

  constructor( private courseService:CourseService, @Inject('API_KEY')private apiKey) { 
    console.log(this.courseService, this.apiKey);
    //this.courseService =  courseService;
    this.courses =  this.courseService.getCourses();
  }

  ngOnInit() {
  }

  CourseClicked(eventData){
    console.log(eventData);
  }

  userNameLostFocus(e){
    console.log(e)

    switch(this.courseTitle1){
      case '1':
      case '2':
      default:
    }
  }

  // userNameChange(eventData){
  //   this.favoriteCourse = eventData.target.value
  // }
}
