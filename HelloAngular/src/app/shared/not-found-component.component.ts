import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-component',
  template: `
    <p>
      Sorry, we are unable to find the page you are looking for !!!
    </p>
  `,
  styles: []
})
export class NotFoundComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
