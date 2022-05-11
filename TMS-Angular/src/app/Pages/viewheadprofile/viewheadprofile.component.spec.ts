import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewheadprofileComponent } from './viewheadprofile.component';

describe('ViewheadprofileComponent', () => {
  let component: ViewheadprofileComponent;
  let fixture: ComponentFixture<ViewheadprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewheadprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewheadprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
