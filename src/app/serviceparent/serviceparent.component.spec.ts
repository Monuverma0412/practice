import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceparentComponent } from './serviceparent.component';

describe('ServiceparentComponent', () => {
  let component: ServiceparentComponent;
  let fixture: ComponentFixture<ServiceparentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceparentComponent]
    });
    fixture = TestBed.createComponent(ServiceparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
