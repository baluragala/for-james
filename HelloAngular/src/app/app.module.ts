import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CourseDetailComponent } from './course-detail.component';
import { CourseListComponent } from './course-list/course-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CourseDetailComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
