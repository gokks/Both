import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadmomComponent } from './uploadmom.component';

describe('UploadmomComponent', () => {
  let component: UploadmomComponent;
  let fixture: ComponentFixture<UploadmomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadmomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadmomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
