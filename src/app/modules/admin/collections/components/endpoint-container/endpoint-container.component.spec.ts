import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointContainerComponent } from './endpoint-container.component';

describe('EndpointContainerComponent', () => {
  let component: EndpointContainerComponent;
  let fixture: ComponentFixture<EndpointContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndpointContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
