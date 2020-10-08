import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleFieldFormComponent } from './rule-field-form.component';

describe('RuleFieldFormComponent', () => {
  let component: RuleFieldFormComponent;
  let fixture: ComponentFixture<RuleFieldFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleFieldFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleFieldFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
