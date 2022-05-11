import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcourseCoordinatorComponent } from './viewcourse-coordinator.component';

describe('ViewcourseCoordinatorComponent', () => {
  let component: ViewcourseCoordinatorComponent;
  let fixture: ComponentFixture<ViewcourseCoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcourseCoordinatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcourseCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
