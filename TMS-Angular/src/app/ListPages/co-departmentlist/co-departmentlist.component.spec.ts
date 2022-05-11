import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoDepartmentlistComponent } from './co-departmentlist.component';

describe('CoDepartmentlistComponent', () => {
  let component: CoDepartmentlistComponent;
  let fixture: ComponentFixture<CoDepartmentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoDepartmentlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoDepartmentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
