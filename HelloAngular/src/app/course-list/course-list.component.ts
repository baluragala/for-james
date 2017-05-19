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

  coursesFilter:string;

  course = {
    title:'angular',
    desc:'by google',
    isPaid:false
  }

  courses= [
    {
    title:'angular1',
    desc:'by google',
    isPaid:true
  },
  {
    title:'angular2',
    desc:'by google'
  },
  {
    title:'angular3',
    desc:'by google',
    isPaid:true
  },
  {
    title:'angular4',
    desc:'by google',
    isPaid:false
  },
  {
    title:'angular5',
    desc:'by google',
    isPaid:true
  },
  {
    title:'angular6',
    desc:'by google',
    isPaid:false
  },
  {
    title:'angular7',
    desc:'by google'
  },
  {
    title:'angular8',
    desc:'by google',
    isPaid:false
  }
  ]
  favoriteCourse:string = 'Intial Value';

  constructor() { }

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
