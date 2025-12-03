import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CANTIDADPage } from './cantidad.page';

describe('CANTIDADPage', () => {
  let component: CANTIDADPage;
  let fixture: ComponentFixture<CANTIDADPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CANTIDADPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
