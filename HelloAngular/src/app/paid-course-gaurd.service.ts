import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import {CourseService} from './course.service';

@Injectable()
export class PaidCourseGaurdService implements CanActivate {
  
  constructor(private courseService:CourseService) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log(route);
      if(this.courseService.isPaid(route.params["courseId"]))
        return false;
      else
        return true;
    }

}
