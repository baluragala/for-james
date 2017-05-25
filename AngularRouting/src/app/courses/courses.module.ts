import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { CourseDetailComponent } from './course-detail.component';
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'courses',
        children:[
          {path:'', component:CourseListComponent},
          {path:':id', component:CourseDetailComponent}
      ]}
    ])
  ],
  declarations: [CourseListComponent, CourseDetailComponent]
})
export class CoursesModule { }
