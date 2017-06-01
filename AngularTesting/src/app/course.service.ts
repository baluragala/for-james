import { Injectable } from '@angular/core';

@Injectable()
export class COurseService {
  //{title:'course1'},{title:'course2'},{title:'course2'},{title:'course4'}
  courses=[];
  constructor() { }

  getCourses(){
    return this.courses;
  }

  saveCourse(course){
    this.courses.push(course);
  }

}
