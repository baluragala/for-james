import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CourseDetailComponent } from './course-detail.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseCartComponent } from './course-cart/course-cart.component';
import { SelectCoursesComponent } from './select-courses/select-courses.component';
import { DelayDirective } from './delay.directive';
import { CardComponent } from './card/card.component';
import { UnpublishedDirective } from './unpublished.directive'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CourseDetailComponent,
    CourseListComponent,
    CourseCartComponent,
    SelectCoursesComponent,
    DelayDirective,
    CardComponent,
    UnpublishedDirective
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
