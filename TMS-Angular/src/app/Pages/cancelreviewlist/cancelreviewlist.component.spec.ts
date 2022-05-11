import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelreviewlistComponent } from './cancelreviewlist.component';

describe('CancelreviewlistComponent', () => {
  let component: CancelreviewlistComponent;
  let fixture: ComponentFixture<CancelreviewlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelreviewlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelreviewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
