import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacktraineeComponent } from './feedbacktrainee.component';

describe('FeedbacktraineeComponent', () => {
  let component: FeedbacktraineeComponent;
  let fixture: ComponentFixture<FeedbacktraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbacktraineeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbacktraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
