import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoOrdinatorAddCourseComponent } from './co-ordinator-add-course.component';

describe('CoOrdinatorAddCourseComponent', () => {
  let component: CoOrdinatorAddCourseComponent;
  let fixture: ComponentFixture<CoOrdinatorAddCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoOrdinatorAddCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoOrdinatorAddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
