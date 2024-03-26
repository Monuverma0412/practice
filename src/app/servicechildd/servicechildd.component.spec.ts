import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicechilddComponent } from './servicechildd.component';

describe('ServicechilddComponent', () => {
  let component: ServicechilddComponent;
  let fixture: ComponentFixture<ServicechilddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicechilddComponent]
    });
    fixture = TestBed.createComponent(ServicechilddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
