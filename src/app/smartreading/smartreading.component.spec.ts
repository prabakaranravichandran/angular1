import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartreadingComponent } from './smartreading.component';

describe('SmartreadingComponent', () => {
  let component: SmartreadingComponent;
  let fixture: ComponentFixture<SmartreadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartreadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartreadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
