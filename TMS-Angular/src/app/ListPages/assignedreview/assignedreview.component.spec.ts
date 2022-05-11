import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedreviewComponent } from './assignedreview.component';

describe('AssignedreviewComponent', () => {
  let component: AssignedreviewComponent;
  let fixture: ComponentFixture<AssignedreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
