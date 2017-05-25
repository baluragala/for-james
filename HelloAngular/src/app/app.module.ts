import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { SharedModule } from './shared/shared.module'
import { CourseService } from './course.service'
import { CourseNextVersionService } from './course-next-version.service'
import { CourseDebugService } from './course-debug.service';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddAuthorComponent } from './add-author/add-author.component'
import { NotFoundComponentComponent } from './shared/not-found-component.component'

import {RouterModule} from '@angular/router'

import { AppRoutes} from './app.routes';
import { CourseAdditionalDetailsComponent } from './course-additional-details/course-additional-details.component'
import { PaidCourseGaurdService } from './paid-course-gaurd.service';

export function serviceFactory(env, apiKey){
        if(env == 'DEV')
          return new CourseService();
        else
          return new CourseNextVersionService();
        }


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
    UnpublishedDirective,
    AddCourseComponent,
    AddAuthorComponent,
    CourseAdditionalDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    //CourseService, // short hand
    // {
    //   provide:CourseService, useClass:CourseDebugService
    // } // map style
    { provide:'ENV',useValue:'DEV'},
    { provide:'API_KEY', useValue:'wsd$sdfsgdf15%lkjl99**'},
    {
      provide:CourseService, useFactory: serviceFactory,
      deps:['ENV','API_KEY']
    },
    PaidCourseGaurdService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
