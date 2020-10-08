import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldEpFormComponent } from './field-ep-form.component';

describe('FieldEpFormComponent', () => {
  let component: FieldEpFormComponent;
  let fixture: ComponentFixture<FieldEpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldEpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldEpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
