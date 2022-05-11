import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcoprofileComponent } from './viewcoprofile.component';

describe('ViewcoprofileComponent', () => {
  let component: ViewcoprofileComponent;
  let fixture: ComponentFixture<ViewcoprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcoprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcoprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
