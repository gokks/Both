import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedreviewlistComponent } from './completedreviewlist.component';

describe('CompletedreviewlistComponent', () => {
  let component: CompletedreviewlistComponent;
  let fixture: ComponentFixture<CompletedreviewlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedreviewlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedreviewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
