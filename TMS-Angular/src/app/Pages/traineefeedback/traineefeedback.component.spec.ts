import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineefeedbackComponent } from './traineefeedback.component';

describe('TraineefeedbackComponent', () => {
  let component: TraineefeedbackComponent;
  let fixture: ComponentFixture<TraineefeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineefeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineefeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
