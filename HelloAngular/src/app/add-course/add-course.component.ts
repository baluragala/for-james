import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm, FormControl} from '@angular/forms'

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styles: []
})
export class AddCourseComponent implements OnInit {
  
  @ViewChild('courseForm', FormControl) courseForm:NgForm;
  
  categories = ['Web','Mobile','Desktop']
  course={};
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){
    //console.log(this.courseForm.form);
  }

  OnSubmit(){
      console.log(this.courseForm.form.value)
      // courseService.save(this.courseForm.form.value)
  }
}
