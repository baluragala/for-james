import { Component, ViewEncapsulation } from '@angular/core';
import { CourseService } from './course.service';
import { CourseDebugService } from './course-debug.service';

@Component({
  selector: 'zeo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular!!!';

  sayHello(){
    return {hello:"Hello",message:"Good Day"};
  }
}
