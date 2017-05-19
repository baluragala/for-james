import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-cart',
  templateUrl: './course-cart.component.html',
  styleUrls: ['./course-cart.component.css']
})
export class CourseCartComponent implements OnInit {

  currentStep=1;
  constructor() { }

  ngOnInit() {
  }

}
