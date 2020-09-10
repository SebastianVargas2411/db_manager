import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionFormModalComponent } from './collection-form-modal.component';

describe('CollectionFormModalComponent', () => {
  let component: CollectionFormModalComponent;
  let fixture: ComponentFixture<CollectionFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
