import { Component } from '@angular/core';

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
