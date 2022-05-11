import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadDepartmentlistComponent } from './head-departmentlist.component';

describe('HeadDepartmentlistComponent', () => {
  let component: HeadDepartmentlistComponent;
  let fixture: ComponentFixture<HeadDepartmentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadDepartmentlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadDepartmentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
