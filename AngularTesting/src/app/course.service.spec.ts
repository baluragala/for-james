import { TestBed, inject } from '@angular/core/testing';

import { COurseService } from './course.service';

describe('COurseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [COurseService]
    });
  });

  it('should be created', inject([COurseService], (service: COurseService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getCourses method', inject([COurseService], (service: COurseService) => {
    expect(service.getCourses).toBeTruthy();
  }));

  it('should return 0 courses for initial getCourses method call', inject([COurseService], (service: COurseService) => {
    expect(service.getCourses().length).toEqual(0);
  }));

  it('should return 1 course for after saveCourse', inject([COurseService], (service: COurseService) => {
    service.saveCourse({title:'c2'});
    expect(service.getCourses().length).toEqual(1);
  }));
});
