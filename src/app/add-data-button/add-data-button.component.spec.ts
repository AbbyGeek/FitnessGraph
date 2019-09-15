import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataButtonComponent } from './add-data-button.component';

describe('AddDataButtonComponent', () => {
  let component: AddDataButtonComponent;
  let fixture: ComponentFixture<AddDataButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDataButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
