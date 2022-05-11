import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanceledreviewComponent } from './canceledreview.component';

describe('CanceledreviewComponent', () => {
  let component: CanceledreviewComponent;
  let fixture: ComponentFixture<CanceledreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanceledreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanceledreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
