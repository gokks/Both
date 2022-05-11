import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerlistComponent } from './reviewerlist.component';

describe('ReviewerlistComponent', () => {
  let component: ReviewerlistComponent;
  let fixture: ComponentFixture<ReviewerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewerlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
