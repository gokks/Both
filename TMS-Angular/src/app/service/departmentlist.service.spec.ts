import { TestBed } from '@angular/core/testing';

import { DepartmentService } from './departmentlist.service';

describe('DepartmentlistService', () => {
  let service: DepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
