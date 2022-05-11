import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoOrdinatorCourseListComponent } from './co-ordinator-course-list.component';

describe('CoOrdinatorCourseListComponent', () => {
  let component: CoOrdinatorCourseListComponent;
  let fixture: ComponentFixture<CoOrdinatorCourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoOrdinatorCourseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoOrdinatorCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
