import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtraineeprofileComponent } from './viewtraineeprofile.component';

describe('ViewtraineeprofileComponent', () => {
  let component: ViewtraineeprofileComponent;
  let fixture: ComponentFixture<ViewtraineeprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtraineeprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtraineeprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
