import { TestBed, inject } from '@angular/core/testing';
import { PaidCourseGaurdService } from './paid-course-gaurd.service';

describe('PaidCourseGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaidCourseGaurdService]
    });
  });

  it('should ...', inject([PaidCourseGaurdService], (service: PaidCourseGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
