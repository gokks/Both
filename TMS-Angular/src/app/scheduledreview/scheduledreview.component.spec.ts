import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledreviewComponent } from './scheduledreview.component';

describe('ScheduledreviewComponent', () => {
  let component: ScheduledreviewComponent;
  let fixture: ComponentFixture<ScheduledreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
