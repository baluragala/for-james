
import { CourseDetailComponent } from './course-detail.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseCartComponent } from './course-cart/course-cart.component';
import { SelectCoursesComponent } from './select-courses/select-courses.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddAuthorComponent } from './add-author/add-author.component'
import { NotFoundComponentComponent } from './shared/not-found-component.component'
import { CourseAdditionalDetailsComponent} from './course-additional-details/course-additional-details.component'
import {PaidCourseGaurdService} from './paid-course-gaurd.service'

export const AppRoutes = [
      {path:'add-course', component:AddCourseComponent},
      {path:'add-author', component:AddAuthorComponent},
      {path:'courses', component:CourseListComponent},
      {path:'courses/:courseId', component:CourseAdditionalDetailsComponent, canActivate:[PaidCourseGaurdService]},
      {path:'cart', component:CourseCartComponent},
      {path:'**', component:NotFoundComponentComponent, pathMatch:'full'}
    ]