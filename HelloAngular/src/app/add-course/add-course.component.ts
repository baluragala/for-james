import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm, FormControl} from '@angular/forms'

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styles: []
})
export class AddCourseComponent implements OnInit {
  
  @ViewChild('courseForm', FormControl) courseForm:NgForm;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){
    console.log(this.courseForm.form);
  }
}
