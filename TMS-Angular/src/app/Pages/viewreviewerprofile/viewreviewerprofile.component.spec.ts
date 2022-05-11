import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreviewerprofileComponent } from './viewreviewerprofile.component';

describe('ViewreviewerprofileComponent', () => {
  let component: ViewreviewerprofileComponent;
  let fixture: ComponentFixture<ViewreviewerprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewreviewerprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreviewerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
