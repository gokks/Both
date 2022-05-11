import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedreviewComponent } from './completedreview.component';

describe('CompletedreviewComponent', () => {
  let component: CompletedreviewComponent;
  let fixture: ComponentFixture<CompletedreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
