import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app works!!';

  course={title:'C1'};

  changeCourse(){
    this.course = { title:'C2'}
    //this.course.title = 'C2';
  }
}
