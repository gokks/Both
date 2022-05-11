import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreviewerComponent } from './addreviewer.component';

describe('AddreviewerComponent', () => {
  let component: AddreviewerComponent;
  let fixture: ComponentFixture<AddreviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddreviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
