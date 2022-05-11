import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignreviewlistComponent } from './assignreviewlist.component';

describe('AssignreviewlistComponent', () => {
  let component: AssignreviewlistComponent;
  let fixture: ComponentFixture<AssignreviewlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignreviewlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignreviewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
