import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignreviewCoComponent } from './assignreview-co.component';

describe('AssignreviewCoComponent', () => {
  let component: AssignreviewCoComponent;
  let fixture: ComponentFixture<AssignreviewCoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignreviewCoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignreviewCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
