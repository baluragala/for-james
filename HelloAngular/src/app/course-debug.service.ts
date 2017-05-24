import { Injectable } from '@angular/core';

@Injectable()
export class CourseDebugService {

  constructor() { }

  getCourses(){
    return [{
            title:'angular1- DEBUG SERVICE',
            desc:'by google',
            isPaid:true,
            price:100
          }]
  }

}
