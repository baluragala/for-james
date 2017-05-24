import { Injectable } from '@angular/core';

@Injectable()
export class CourseNextVersionService {

  constructor() { }

  getCourses(){
    return [
      {
            title:'angular3 - from new service',
            desc:'by google',
            isPaid:true,
            price:300
    },
    {
            title:'angular3 - from new service',
            desc:'by google',
            isPaid:true,
            price:300
    },
    {
            title:'angular3 - from new service',
            desc:'by google',
            isPaid:true,
            price:300
    }
    ];
  }

}
