import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class CourseService {

  courses= [
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

  constructor(private http:Http) { }

  isPaid(courseId:string){
    let filteredCourses = this.courses.filter( course => course.title == courseId );
    return filteredCourses[0].isPaid;
  }

  getCourses() {
    this.http.get('http://localhost:3000/courses')
      .map(response => response.json())
      .subscribe(response => console.log(response));
    return this.courses;
  }

  getAuthorByCourse(courseId:string){
    /*
    1. get course details -> http://localhost:3000/courses?id=2
    2. use course detail response and fetch autorid
    3. get author details -> http://localhost:3000/author?id=???
    */

    // this.http.get(`http://localhost:3000/courses?id=${courseId}`)
    // .map(response => response.json())
    // .subscribe(course => {
    //   console.log('course',course);
    //   this.http.get(`http://localhost:3000/authors?id=${course[0].author}`)
    //   .map(authorReponse => authorReponse.json())
    //   .subscribe(author => console.log(author));
    // })

    this.http.get(`http://localhost:3000/courses?id=${courseId}`)
    .map(response => response.json())
    .mergeMap(courses => this.http.get(`http://localhost:3000/authors?id=${courses[0].author}`))
    .mergeMap(authors => this.http.get(`http://localhost:3000/profile?author=${(authors.json())[0].id}`))
    .subscribe(profile => {
      console.log('profile',profile.json());
    })

  }

  getAllDetails(){
    let courses$ = this.http.get(`http://localhost:3000/courses`);
    let authors$ = this.http.get(`http://localhost:3000/authors`);
    let profiles$ = this.http.get(`http://localhost:3000/profile`);

    Observable.forkJoin(courses$,authors$,profiles$)
    .subscribe(responses => console.log(responses))
  }
}
