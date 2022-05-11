import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtrainerprofileComponent } from './viewtrainerprofile.component';

describe('ViewtrainerprofileComponent', () => {
  let component: ViewtrainerprofileComponent;
  let fixture: ComponentFixture<ViewtrainerprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtrainerprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtrainerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
