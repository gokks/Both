import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineefeedbackviewComponent } from './traineefeedbackview.component';

describe('TraineefeedbackviewComponent', () => {
  let component: TraineefeedbackviewComponent;
  let fixture: ComponentFixture<TraineefeedbackviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineefeedbackviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineefeedbackviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
