import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor() { }

  getCourses() {
    let courses= [
            {
            title:'angular1',
            desc:'by google',
            isPaid:true,
            price:100
          },
          {
            title:'angular2',
            desc:'by google',
            isPaid:true,
            price:200
          },
          {
            title:'angular3',
            desc:'by google',
            isPaid:true,
            price:300
          },
          {
            title:'angular4',
            desc:'by google',
            isPaid:false,
            price:0
          },
          {
            title:'angular5',
            desc:'by google',
            isPaid:true,
            price:150
          },
          {
            title:'angular6',
            desc:'by google',
            isPaid:false,
            price:0
          }
      ]
  return courses;
  }
}
